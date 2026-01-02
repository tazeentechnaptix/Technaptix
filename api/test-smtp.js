const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');

const mode = process.argv[2] || 'TEST';
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
const smtpSecure = (process.env.SMTP_SECURE === 'true') || smtpPort === 465;
const user = process.env.SMTP_USER || process.env.EMAIL_USER;
const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
const dest = process.env.DEST_EMAIL_CONTACT || process.env.DEST_EMAIL;

if (!user || !pass || !dest) {
  console.error('Missing SMTP_USER, SMTP_PASS, or DEST_EMAIL_CONTACT in .env');
  process.exit(2);
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: { user, pass },
});

(async () => {
  try {
    await transporter.verify();
    console.log('SMTP transporter verified (connected)');

    const info = await transporter.sendMail({
      from: `Test <${user}>`,
      to: dest,
      subject: `[SMTP TEST] ${mode}`,
      text: `This is a test email (mode: ${mode}) sent using SMTP user ${user}`,
    });

    console.log('✅ Test email sent. messageId=', info && info.messageId);
    process.exit(0);
  } catch (err) {
    console.error('❌ Test email failed:', err && err.message);
    if (err && err.response) console.error('SMTP response:', err.response);
    process.exit(1);
  }
})();
