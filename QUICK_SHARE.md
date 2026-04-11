# 🚀 Quick Share Setup

## For Sharing with Friends & Family (No Terminal Needed)

Follow these simple steps to deploy your app so anyone can use it from their phone or computer.

---

## Step 1: Create Accounts (Free)

### GitHub Account
1. Go to **https://github.com/signup**
2. Enter email, create password, username
3. Verify email
4. Done ✅

### Vercel Account
1. Go to **https://vercel.com/signup**
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Done ✅

---

## Step 2: Push Your Code to GitHub

If you're in VS Code:

1. **Open the Terminal** (Ctrl + `)
2. **Run these commands:**

```bash
# Initialize git (one time)
git init

# Add all files
git add .

# Commit
git commit -m "Initial yoga app"

# Add GitHub as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/yoga-practice-generator.git

# Create main branch and push
git branch -M main
git push -u origin main
```

After pushing, your repo is at: `https://github.com/USERNAME/yoga-practice-generator`

---

## Step 3: Deploy to Vercel (1 Click)

1. **Go to:** https://vercel.com/dashboard
2. **Click:** "Add New..." → "Project"
3. **Select:** Your GitHub repo
4. **Click:** "Import"
5. **Click:** "Deploy"
6. **Wait** ~30 seconds

**You're done!** 🎉

You'll get a URL like: `https://yoga-practice-generator-xyz.vercel.app`

---

## Step 4: Share the URL

Copy your URL and share it anywhere:
- 📧 Email
- 💬 Text message
- 📱 Social media
- 🔗 In a document

Your friends/family just click the link—no installation needed!

---

## Step 5: Optional - Custom Domain

If you want a nicer URL like `yoga.yourname.com`:

1. **Buy a domain** from GoDaddy, Namecheap, etc.
2. **In Vercel dashboard** → Your project → Settings → Domains
3. **Enter domain** and follow setup steps
4. **Done!** Your custom domain points to your app

---

## How Your Friends Use It

1. **Click the link** you sent
2. **Tap the ⚙️ icon** (Settings)
3. **Paste their Anthropic API key** (get one at https://console.anthropic.com/account/keys)
4. **Select preferences** and generate!

---

## On iPhone Safari

**To use on home screen:**
1. **Open the URL** in Safari
2. **Tap Share**
3. **Select "Add to Home Screen"**
4. **Name it "Yoga"**
5. **Tap "Add"**

Now it launches like a native app! 📱

---

## Making Updates

Made changes to the code and want to update the live app?

1. **In VS Code terminal:**
```bash
git add .
git commit -m "Your changes here"
git push
```

2. **Vercel automatically redeploys!**
3. **Live URL updates instantly**

Your friends see the new version immediately! ✨

---

## Troubleshooting Deployment

### "Repository not found"
- Make sure you ran: `git push -u origin main`
- Check that the repo is public on GitHub

### "Deployment failed"
- Check the Vercel build logs
- Make sure `vercel.json` and `api/generate.js` exist
- Redeploy

### "App shows blank page"
- Check browser console (F12)
- Clear browser cache and reload
- Make sure `yoga-generator.html` is in root folder

### "Settings button doesn't work"
- Refresh the page
- Try a different browser
- Check browser console for errors

---

## Costs

- **Vercel hosting:** FREE
- **GitHub:** FREE
- **Anthropic API:** Each user pays for their own usage (~$0.01-$0.15 per session)

No costs to you for hosting!

---

## You Did It! 🎉

Your friends and family can now enjoy personalized AI yoga sessions from anywhere, on any device!

---

## Need Help?

- **Vercel issues?** Check https://vercel.com/docs
- **GitHub issues?** Check https://docs.github.com
- **App issues?** Check browser console (F12 → Console tab)

Happy yoga-ing! 🧘‍♀️✨
