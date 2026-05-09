# Notes — a tiny PWA

A no-build, vanilla-JS notes app that installs to your phone's home screen and works offline.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to Vercel (CLI)

```sh
npm i -g vercel
vercel            # follow prompts (login + link), deploys a preview
vercel --prod     # promote to production
```

You'll get an HTTPS URL (e.g. `notes-xxx.vercel.app`).

## Install on your phone

1. Open the URL on your phone.
2. **iOS Safari**: Share → "Add to Home Screen".
3. **Android Chrome**: menu → "Install app" (or accept the auto-prompt).

It launches fullscreen, works offline, and stores notes locally via `localStorage`.

## Files

- `index.html`, `style.css`, `app.js` — the app
- `manifest.webmanifest` — PWA install metadata
- `service-worker.js` — offline caching
- `icon-192.png`, `icon-512.png` — app icons
- `vercel.json` — deploy config (correct headers for SW + manifest)
