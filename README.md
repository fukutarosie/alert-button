# Personal Alert Button (PAB)

Personal Alert Button is a web application designed to help elderly users quickly request assistance in an emergency. The experience begins with a large, easy-to-press emergency button that guides the user through a short recording flow, captures audio and optional video, and sends the data to AI-powered analysis for urgency triage.

## What this project does

- Provides a simple emergency interface with a prominent "Emergency" button.
- Guides the user through microphone permissions and a short countdown before recording starts.
- Records audio and, when enabled, video to capture the situation more clearly.
- Uses AI to transcribe and classify the incident as Urgent, Not Urgent, or Uncertain.
- Stores reports in Supabase and allows an admin to review, edit, and manage alerts from a dashboard.

## Core user flow

1. The user opens the app and presses the emergency button.
2. The app requests microphone access and prepares a short recording session.
3. Audio and optional video are captured and sent to backend APIs for analysis.
4. The system produces a report that can be reviewed by authorized staff.

## Main features

- Large, accessible emergency button for quick use
- Multi-language and dark/light theme support
- Audio waveform visualization while recording
- Optional camera support during capture
- AI-based urgency classification
- Admin report dashboard with filtering and status updates

## Tech stack

- Next.js
- React
- Tailwind CSS
- Supabase
- OpenAI API
- Lucide React

## Project structure

- src/app - main pages and API routes
- src/app/api - voice and text processing endpoints
- src/components - reusable UI pieces
- src/lib - settings, auth, report, and Supabase helpers

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a .env.local file in the project root and add:

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the app locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Useful routes

- / - emergency home screen
- /elders/recording - recording and submission flow
- /reports - admin report dashboard
- /admin/login - administrator login

## Notes

This project was built as a practical safety and support tool for elderly users, with an emphasis on fast response, clear triage, and simple administration.
