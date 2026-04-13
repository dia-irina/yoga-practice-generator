# Yoga Practice Generator - Changelog

## v0.0.1 (Stable Patch) - April 13, 2026

### 🐛 Critical Fixes
- **Fixed JSON Parsing Errors** — Increased max_tokens from 2048→4096 to prevent API response truncation
  - Root cause: Long yoga sequences were getting cut off mid-structure, breaking JSON parsing
  - Solution: Higher token limit allows Claude to complete full JSON responses
- **Improved Response Recovery** — Added multi-stage JSON parsing with fallback strategies
- **Enhanced Error Messages** — Better diagnostics for parse failures

### ✨ New Features
- **Voice Guidance** — Web Speech API narrates pose names, alignment cues, and breath counts
  - Automatic when each pose appears
  - Optional: Can be disabled if needed
  - Supported on Chrome, Safari, Edge (iOS/Android/desktop)
- **Exit Button** — Red ✕ button on timer screen allows returning to practice selection
  - Confirmation dialog prevents accidental exits
  - Stops any ongoing voice narration
- **Improved Pose SVGs** — More anatomically accurate 14-pose illustrations
  - Better body positioning for each pose type
  - Enhanced visual clarity with thicker lines and filled head circles
  - Alignment indicators and post shading

### ✅ Testing & Validation
- ✅ Practice generation completes without errors (tested: 15, 30, 45, 60, 90 min)
- ✅ Voice guidance works on desktop Chrome, Safari, Edge
- ✅ Exit button returns to intake screen properly
- ✅ Multiple consecutive generations work without issues
- ✅ iPhone Safari fully functional
- ✅ Mobile API key paste with whitespace cleaning

### 🔄 Technical Improvements
- Character-by-character string escaping for control characters
- Smart JSON truncation finding last complete pose structure
- Fallback progressive truncation (up to 500 character removals)
- Comprehensive console logging for debugging

---

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
