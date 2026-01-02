Technaptix Careers Server
=========================

This small Express server accepts multipart form data (including a PDF cover letter) and forwards the application to a configured email using Nodemailer.

Quick start
-----------

1. Install dependencies inside the `server/` folder:

   npm install

2. Copy `.env.example` to `.env` and fill in your SMTP and destination email values:

   DEST_EMAIL=hr@example.com
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=you@example.com
   SMTP_PASS=your-smtp-password

3. Start the server:

   npm start

By default the server listens on port 4000. Set `PORT` in the `.env` to change it.

Frontend
--------

Set `VITE_API_URL` in the frontend (Vite) environment or use the default `http://localhost:4000`.

The frontend should POST multipart/form-data to `/api/apply` with fields:
- firstName
- lastName
- email
- areaOfInterest (optional)
- coverLetter (file, PDF)

Security
--------

This server is intentionally simple. For production, consider adding:
- Authentication or CAPTCHA to avoid spam
- Virus scanning for attachments
- Rate limiting
- Persistent storage of applications
