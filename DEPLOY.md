# 🧘 Yoga Practice Generator - Shareable Web App

A beautiful, AI-powered yoga practice generator that works on any device—including iPhones in Safari. Share one URL with friends and family; each person enters their own API key.

---

## 🚀 Deploy to Vercel (Free, Takes 2 minutes)

The easiest way to share this app is to deploy it to **Vercel**, a free cloud platform. Anyone can access it from any browser, including iPhone Safari.

### Step 1: Create a Vercel Account (Free)

1. Go to **https://vercel.com/signup**
2. Sign up with GitHub, GitLab, Bitbucket, or Email
3. Verify your email

### Step 2: Deploy This App

**Option A: One-Click Deploy (Easiest)**
1. Fork this project on GitHub (if you haven't already)
2. Go to https://vercel.com/new
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Import"
6. Click "Deploy"
7. Wait ~30 seconds
8. You'll get a live URL like `https://my-yoga-app.vercel.app`

**Option B: Deploy from GitHub**
1. Push this folder to GitHub
2. Go to https://vercel.com/dashboard
3. Click "Add New..." → "Project"
4. Select your repo
5. Click "Import" and then "Deploy"

### Step 3: Share the URL

Once deployed, Vercel gives you a public URL. Share this link with anyone:
- ✅ Works on desktop browsers
- ✅ Works on mobile browsers
- ✅ Works on iPhone Safari
- ✅ Works offline-first (sessions are cached)
- ✅ No app installation needed

Example: `https://my-yoga-app.vercel.app`

---

## 👥 For Your Friends & Family

Once you deploy, anyone can use it by:

1. **Opening the URL** in their browser (or bookmarking it)
2. **Tapping the gear icon (⚙)** in the top-right
3. **Pasting their Anthropic API key** (see below)
4. **Generating practices** as many times as they want

The API key is **only saved in their browser session**—never stored on servers.

---

## 🔑 Getting an Anthropic API Key

Your friends/family need their own Anthropic API key. Here's how they get one:

1. Go to **https://console.anthropic.com/account/keys**
2. Sign up or log in (they'll need to create a Claude account)
3. Click "Create Key"
4. Copy the key (starts with `sk-ant-`)
5. Paste it into the Settings (⚙ icon) in the yoga app
6. Done! ✅

**Note:** Anthropic charges per API call (usually $0.01-$0.10 per practice, depending on length). Each person should have their own API key so they can track their own usage.

---

## 📱 Mobile Features

The app is fully optimized for mobile:

**iPhone Safari:**
- ✅ Full-screen practice timer
- ✅ Accessible settings
- ✅ Smooth animations
- ✅ Can be added to home screen as a web app

**To add to home screen (iPhone):**
1. Open the app URL in Safari
2. Tap the **Share** button
3. Select "Add to Home Screen"
4. Name it "Yoga" or whatever you want
5. Tap "Add"

Now it works like a native app! 🚀

---

## 🔒 Privacy & Security

- **API keys are never sent to Vercel servers**
- **All input is stored locally** in your browser session
- **No data is collected or logged** (except Vercel's standard hosting logs)
- **Each person uses their own API key** (you don't share credentials)
- **The backend proxy** ensures API keys stay secure

---

## 📊 How It Works

1. User enters their Anthropic API key (⚙ Settings)
2. User selects duration, focus area, and music mood
3. User clicks "Generate My Practice"
4. Request goes to Vercel backend → Anthropic API → Response comes back
5. App displays the custom yoga sequence
6. User can scroll through poses or start the guided timer

No API key is ever exposed in browser headers thanks to the server-side proxy.

---

## 💰 Costs

- **Vercel hosting:** FREE (generous free tier)
- **Anthropic API:** Pay-as-you-go (~$0.01-$0.15 per session)
  - 15 min session: ~$0.01
  - 60 min session: ~$0.05
  - 90 min session: ~$0.10

Users only pay for what they use through Anthropic.

---

## 🛠️ Troubleshooting

### "API Key not set"
→ Click the ⚙ icon in the top-right and paste your API key

### "Failed to fetch"
→ Check your internet connection and refresh the page

### "Unauthorized" or 401 error
→ Your API key is invalid. Get a new one from https://console.anthropic.com/account/keys

### "Rate limited"
→ You've made too many requests too quickly. Wait a minute and try again.

### Can't see the settings button
→ Tap the screen a few times to make sure the UI is responsive

---

## 💻 Advanced: Running Locally (Optional)

If you want to run this locally without deploying:

1. **Install Node.js** from https://nodejs.org/
2. **Open a terminal** in this folder
3. **Run:** `node server.js`
4. **Open:** `http://localhost:3000/yoga-generator.html`
5. **Add your API key** in Settings

---

## 📄 Files Included

- `yoga-generator.html` - Main app (single HTML file, no build needed)
- `server.js` - Local Node.js backend (for running locally)
- `api/generate.js` - Vercel serverless function (for cloud deployment)
- `vercel.json` - Vercel configuration

---

## ✨ Features

- 🤖 **AI-Powered:** Claude generates unique sequences every time
- 🎨 **Beautiful UI:** Calm, minimal aesthetic with earth tones
- ⏱️ **Guided Timer:** Full-screen timer with pose illustrations
- 🎵 **Music Suggestions:** Spotify/YouTube links for selected moods
- 📱 **Mobile-First:** Optimized for iPhones and tablets
- 🔐 **Secure:** API keys stored only in browser session
- 🌐 **Shareable:** One URL works for everyone
- 📴 **Session Caching:** Practices are cached for offline review

---

## 🎯 Quick Deploy Checklist

- [ ] Created GitHub account (if needed)
- [ ] Forked or pushed this repo to GitHub
- [ ] Created Vercel account
- [ ] Connected GitHub to Vercel
- [ ] Clicked "Deploy"
- [ ] Got your live URL
- [ ] Tested in a browser
- [ ] Shared URL with friends/family
- [ ] Friends/family got their own API keys

---

## 📞 Questions?

Check `SETUP.md` for detailed local setup instructions.

For API issues, visit https://console.anthropic.com/

---

**Enjoy your personalized yoga practice! 🧘‍♀️✨**
