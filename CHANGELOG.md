# Yoga Practice Generator - Changelog

## v0.0.0 (Base Stable Release) - April 11, 2026

### ✅ Features Implemented
- **AI-Powered Yoga Sequence Generation** — Uses Anthropic Claude API to generate personalized sequences based on duration and focus area
- **Duration Selection** — 15, 30, 45, 60, or 90-minute practices
- **Focus Areas** — Full body, hips & lower back, shoulders & chest, core, legs & hamstrings, spine & flexibility, restorative/stress relief
- **Music Moods** — Optional background music suggestions (calm & meditative, energizing & upbeat, nature sounds, ambient/drone)
- **Practice Overview Screen** — Displays all poses with pose illustrations, Sanskrit names, timing, alignment cues, transition guidance
- **Guided Timer Mode** — Full-screen pose-by-pose timer with automatic advancement
- **Pose Illustrations** — 14 custom SVG stick-figure poses (Mountain, Downward Dog, Warrior, Tree, Child, Forward Fold, Cobra, Lotus, Cat, Cow, Bridge, Triangle, Pigeon, Shoulder Stand, Savasana)
- **Completion Screen** — Practice summary + music suggestions with links to Spotify/YouTube
- **Practice Restart** — Easy restart without refreshing page

### 🔐 Security & Storage
- **API Key Management** — Settings modal to save/clear API key
- **SessionStorage Only** — API keys stored in browser session, cleared on close
- **Server-Side Proxy** — API key kept server-side, never exposed in requests

### 📱 Mobile Support
- **Responsive Design** — Works on 375px+ screen widths
- **iPhone Safari Compatible** — PWA meta tags for home screen install
- **Smart Paste Handling** — Automatically removes whitespace/line breaks from pasted API keys (solves Word copy-paste issues)
- **Visual Feedback** — Green border flash on successful paste

### 🛠️ Technical Stack
- **Frontend** — Single-file HTML5 app, Vanilla JS, CSS3 (no frameworks)
- **Backend** — Vercel serverless Node.js functions
- **API** — Anthropic Claude (claude-sonnet-4-20250514)
- **Hosting** — Vercel (free tier)
- **Version Control** — GitHub (dia-irina/yoga-practice-generator)

### 🐛 Known Limitations v0.0.0
- No user accounts or saved practices (each session is temporary)
- No practice history or statistics
- Limited pose customization
- Music suggestions link externally (no built-in player)
- No offline mode

### 🚀 Deployment
- **URL** — https://yoga-practice-generator-bdmw.vercel.app
- **Auto-deployed** from GitHub main branch

---

## Next Version (v0.1.0) - TODO
- [ ] Save/load practice history
- [ ] User preferences (default duration, focus area)
- [ ] More pose variations
- [ ] Breathing guidance
- [ ] Pose modifications for different levels
- [ ] Offline capabilities
- [ ] Dark mode option
