# Deployment Guide

## Deploy to Vercel (Both Frontend & Backend Together)

### 1. Push to GitHub
```bash
git add .
git commit -m "Setup for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository: `technaptix-ai-nexus`
4. Vercel will auto-detect it as a Vite project
5. **Add Environment Variables** (before deploying):
   - `SMTP_HOST` = smtp.gmail.com
   - `SMTP_PORT` = 587
   - `SMTP_USER` = your-email@gmail.com
   - `SMTP_PASS` = your-app-password
   - `DEST_EMAIL` = info@technaptix.com
   - `DEST_EMAIL_CAREERS` = careers@technaptix.com
   - `CORS_ORIGIN` = https://your-domain.vercel.app (or leave empty for all)

6. Click **"Deploy"**

### 3. After Deployment

- Frontend will be at: `https://your-project.vercel.app`
- Backend API will be at: `https://your-project.vercel.app/api/*`
- Contact form: `/api/contact`
- Careers form: `/api/apply`

### 4. Local Development

**Start Backend:**
```bash
cd api
npm install
npm start
```

**Start Frontend (in another terminal):**
```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`
Backend runs on `http://localhost:4000`

### Notes

- The `api/` folder contains your Node.js backend
- Vercel automatically runs it as serverless functions
- Frontend code is in `src/`
- Environment variables in Vercel dashboard are used in production
- Local `.env` file is used for development
