# 🚨 Personal Alert Button (PAB)

When every second matters, your app should be simple, calm, and fast. Personal Alert Button is a friendly emergency help app built for elderly users who may need to call for support with just one tap.

Think of it as a digital safety buddy: big buttons, clear guidance, and smart AI help behind the scenes.

## ✨ What this project does

- Gives users a bold, easy-to-press emergency button when they need help fast.
- Guides them through a quick recording flow so helpers can understand what’s happening.
- Captures voice and optional video to share the situation more clearly.
- Uses AI to turn that input into a helpful report and classify the urgency.
- Lets authorized staff review, manage, and respond to alerts from a simple dashboard.

## 🧡 Why it’s awesome

- Designed to feel simple and reassuring, not overwhelming.
- Built for accessibility and speed in stressful moments.
- Combines a friendly front end with smart backend support.
- Perfect for hackathons, community care projects, or real-world elder support solutions.

## 🔄 How it works

1. The user opens the app and taps the big emergency button.
2. The app gets ready to record a short message.
3. Audio and optional video are captured for context.
4. AI helps classify the situation as Urgent, Not Urgent, or Uncertain.
5. The report is stored and can be reviewed by an admin.

## 🚀 Main features

- Big, accessible emergency button
- Calm, modern UI with light/dark themes
- Voice recording with live audio visualization
- Optional camera support
- AI-powered urgency classification
- Admin dashboard for reviewing reports

## 🛠️ Tech stack

- Next.js
- React
- Tailwind CSS
- Supabase
- OpenAI API
- Lucide React

## 📁 Project structure

- src/app - main pages and app routes
- src/app/api - voice and text processing endpoints
- src/components - reusable UI pieces
- src/lib - settings, auth, reports, and Supabase helpers

## ▶️ Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a .env.local file in the project root and add:

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## 🧭 Useful routes

- / - emergency home screen
- /elders/recording - recording and submission flow
- /reports - admin report dashboard
- /admin/login - administrator login

## 👥 Built by
- Jayadipa Fukutaro Sie — https://github.com/fukutarosie
- Moe Pye Sone — https://github.com/moecrosoft
- Endyano — https://github.com/Endyano
- Vicky Yang — https://github.com/vicky1234500
- Chloe Lee Hae Eun — https://github.com/Chloelee05

## 🌟 Final note

This project is built in HackOMania 2026. All rights reserved.
