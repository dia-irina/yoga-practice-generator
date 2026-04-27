# Yoga Practice Generator - Changelog

## v0.0.3 (Performance, Mobile & Deployment Fix) - April 27, 2026

### ✅ Verified
- ✅ Works on desktop web (Chrome, Safari)
- ✅ Works on iPhone Safari (tested)

### ⚡ Performance
- **Streaming generation** — SSE streaming with live pose counter; user sees first poses within ~1 second
- **Reduced `max_tokens`** — 8192 → 4096; shorter, focused responses generate faster
- **Shorter system prompt** — Inline JSON schema reduced prompt from ~350 to ~120 tokens

### 🎨 Redesign — Intake Screen
- **Fits exactly one page** — No scroll on desktop or mobile; content fills the viewport
- **Pill buttons** — `border-radius: 100px` across all option buttons
- **CSS Grid layout** — `align-content: stretch` makes button rows proportionally fill available height
- **Responsive columns** — Duration/music groups adapt from 3-col (mobile) to 5-col (desktop)
- **`clamp()` sizing** — All spacing and font sizes scale smoothly across screen sizes

### 📱 iPhone / Mobile Safari
- **No auto-zoom** — `.form-input` set to `font-size: 16px`; iOS Safari auto-zooms any input < 16px
- **No bounce scroll** — `overscroll-behavior: none`
- **Correct height** — `-webkit-fill-available` fallback for iOS Safari address bar (pre-iOS 15.4)
- **Text scaling** — `-webkit-text-size-adjust: 100%` prevents Safari auto font scaling on rotate
- **Safe area insets** — `env(safe-area-inset-*)` padding keeps content clear of notch and home bar
- **Touch feedback** — `:active` states on all buttons (`:hover` does not fire on iOS touch)
- **Streaming fallback** — Older iOS Safari (< 14.5, no `ReadableStream`) falls back to `response.text()` parse

### 🛠️ Deployment Fix
- **Fixed Vercel 404** — `server.js` (old proxy) was being run as a Node server by Vercel, returning `{"error":"Not found"}` for all non-API routes. Fixed by switching `vercel.json` to `@vercel/static` builder
- **Removed server entry points** from `package.json`; project is now correctly treated as a static site

---

## v0.0.2 (Architecture & Model Update) - April 15, 2026

### 🏗️ Architecture Changes
- **Direct Browser API Calls** — Removed Vercel serverless proxy; app now calls Anthropic API directly from the browser
  - API key travels only to Anthropic — no longer passes through any intermediate server
  - Eliminates serverless function cold-start latency
  - App works as a pure static site; simpler deployment with no Node.js builds on Vercel
- **Simplified `vercel.json`** — Removed serverless function build config; Vercel now serves static HTML only

### 🤖 Model Update
- **Updated Claude model** — `claude-sonnet-4-20250514` → `claude-sonnet-4-6` (latest Sonnet release)

### 🔧 Technical Fixes
- **Increased `max_tokens`** — 4096 → 8192, doubles headroom for long sessions (especially 60–90 min)
  - Reduces likelihood of truncated JSON responses on longer practices
- **Fixed Node.js engine version** — `24.x` → `22.x` (Node 22 is Vercel's current LTS-supported version)
- **Removed `v0.0.0.html`** — Deleted stale UTF-16 encoded snapshot; `public/index.html` is the single source of truth

### 🔐 Security
- API key now sent directly to `api.anthropic.com` via `x-api-key` header; no third-party server sees it
- Added `anthropic-dangerous-direct-browser-access: true` header (required for browser-originated requests to Anthropic)

---

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
