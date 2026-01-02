const express = require('express');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Allow requests from your frontend
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));

// Enable JSON parsing (if form data includes JSON)
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

// Health check
app.get('/', (req, res) => res.send('Technaptix Careers API Running 🚀'));

// ---- Main endpoint ----
app.post('/api/apply', upload.single('coverLetter'), async (req, res) => {
  try {
    const { firstName, lastName, email, areaOfInterest } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).send('Missing required fields');
    }

    if (!req.file) {
      return res.status(400).send('Cover letter PDF is required');
    }

    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).send('Cover letter must be a PDF');
    }

    const destEmail = process.env.DEST_EMAIL_CAREERS || process.env.DEST_EMAIL;

    // Choose SMTP creds from common env names so users can set EMAIL_USER/PASS or SMTP_USER/PASS
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = (process.env.SMTP_SECURE === 'true') || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    // If DEST_EMAIL or SMTP creds are missing, fall back to a local dev behaviour:
    // save the uploaded file to server/tmp and log the application instead of sending an email.
    if (!destEmail || !smtpUser || !smtpPass) {
      // ensure tmp dir exists
      const fs = require('fs');
      const path = require('path');
      const tmpDir = path.resolve(__dirname, 'tmp');
      if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

      const timestamp = Date.now();
      const safeName = (req.file.originalname || 'cover-letter.pdf').replace(/[^a-zA-Z0-9._-]/g, '_');
      const outPath = path.join(tmpDir, `${timestamp}-${safeName}`);
      fs.writeFileSync(outPath, req.file.buffer);

      console.warn('DEV MODE: DEST_EMAIL or SMTP creds missing. Saved application to', outPath);
      console.warn('Applicant:', { firstName, lastName, email, areaOfInterest });

      return res.json({ ok: true, devFallback: true, savedTo: outPath });
    }

    // Create transporter with auth
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify connection (optional)
    try {
      await transporter.verify();
      console.log(`SMTP transporter verified: host=${smtpHost}, user=${smtpUser ? 'yes' : 'no'}`);
    } catch (verifyErr) {
      console.warn('SMTP verification failed:', verifyErr && verifyErr.message);
    }

    const mailOptions = {
      from: {
        name: `${firstName} ${lastName}`,
        address: process.env.FROM_EMAIL || smtpUser,
      },
      replyTo: email,
      to: destEmail,
      subject: `[Careers] New application from ${firstName} ${lastName} (${areaOfInterest || 'N/A'})`,
      headers: { 'X-Category': 'Careers' },
      text: `New application received:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nArea of Interest: ${areaOfInterest || 'N/A'}`,
      attachments: [
        {
          filename: req.file.originalname || 'cover-letter.pdf',
          content: req.file.buffer,
          contentType: 'application/pdf',
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Application email sent successfully:', info && info.messageId);

    res.json({ ok: true, message: 'Application submitted and emailed successfully!' });
  } catch (err) {
    console.error('❌ Error handling application:', err);
    res.status(500).send('Failed to process application');
  }
});


// ---- Contact Form Endpoint ----
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, inquiry, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send('Missing required fields');
    }

    const destEmail = process.env.DEST_EMAIL_CONTACT || process.env.DEST_EMAIL;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = (process.env.SMTP_SECURE === 'true') || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // display user name, send via your Gmail
      replyTo: email, // so replies go to the sender
      to: destEmail, // your inbox
      subject: `[Contact] New contact inquiry from ${name} (${inquiry || 'General'})`,
      headers: { 'X-Category': 'Contact' },
      text: `
New contact inquiry received:

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}
Inquiry Type: ${inquiry || 'N/A'}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('📨 Contact form email sent successfully from', email);

    res.json({ ok: true, message: 'Contact message sent successfully!' });
  } catch (err) {
    console.error('❌ Error handling contact form:', err);
    res.status(500).send('Failed to send contact message');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Careers server running on port ${PORT}`);
});
