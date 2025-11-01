# Agentic Hello

A minimal Next.js 14 starter that ships a polished landing page and deploys cleanly to Vercel.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally. Run a production build with `npm run build` and start the output with `npm start`.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Deployment

This project is ready for instant deployment to Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-05af1cf0
```

After deployment, confirm the production URL is live:

```bash
curl https://agentic-05af1cf0.vercel.app
```
