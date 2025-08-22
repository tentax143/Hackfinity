# Hackfinity 1.0

A stunning hackathon landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Deployment

### Vercel Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel and it will automatically:

1. Build the React application using `npm run build`
2. Serve the static files from `dist/public`
3. Handle client-side routing with SPA fallback

### Local Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Build Tool**: Vite
- **UI Components**: Radix UI

## 📁 Project Structure

```
├── client/                 # React application
│   ├── src/
│   │   ├── components/     # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── ui/            # Reusable UI components
│   └── index.html
├── server/                # Express server (for local dev)
├── vercel.json           # Vercel configuration
└── vite.config.ts        # Vite configuration
```

## 🎯 Features

- Responsive design
- Smooth animations
- Interactive components
- Modern UI/UX
- Optimized for performance
