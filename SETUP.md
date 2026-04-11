# Yoga Practice Generator - Setup Guide

## For Sharing with Others 👥

**Want to share this with friends/family?** See [DEPLOY.md](./DEPLOY.md) for one-click deployment to Vercel. Takes 2 minutes, works on iPhone Safari, requires no terminal. Perfect for non-technical users!

---

## The CORS Issue 🔒

When running the app as a static HTML file in a browser, direct requests to the Anthropic API are **blocked by browser security** (CORS - Cross-Origin Resource Sharing). This prevents the app from calling the API directly.

## Solutions

### ✅ **Solution 1: Use the Backend Server (Recommended)**

This is the best approach because it keeps your API key secure and handles CORS properly.

#### Prerequisites
- **Node.js** installed on your computer ([Download](https://nodejs.org/))

#### Steps

1. **Open a terminal** in the folder where `yoga-generator.html` and `server.js` are located.

2. **Start the backend server:**
   ```bash
   node server.js
   ```
   You should see:
   ```
   🧘 Yoga Practice Generator Server running at http://localhost:3000
   ```

3. **Keep the terminal open** while using the app.

4. **Open the app in your browser:**
   - If you're using a local development server (like VS Code's Live Server), the app will automatically detect it and route requests through the backend.
   - Otherwise, open `http://localhost:3000/` directly (or serve the file locally)

5. **Generate a practice** using your API key as usual.

### ⚠️ **Solution 2: Quick CORS Proxy (Not Recommended)**

This is a quick workaround but less secure since headers are exposed.

1. Edit `yoga-generator.html` in a text editor
2. Find the line: `const apiEndpoint = window.location.hostname === 'localhost'...`
3. Replace with this temporary direct URL:
   ```javascript
   const apiEndpoint = 'https://cors-anywhere.herokuapp.com/https://api.anthropic.com/v1/messages';
   ```
4. Save and reload the page in your browser
5. It may require allowing access to the CORS proxy on first use

**Note:** This exposes your API key in browser headers and depends on a third-party service. Use only for testing.

### 🛠️ **Solution 3: Self-Hosted Backend (Production)**

For a real deployment, set up a proper Node.js/Python backend on a server and point the app to it.

## Setting Up Local Development

### Option A: VS Code Live Server (Easiest)

1. Install the **Live Server** extension in VS Code
2. Right-click `yoga-generator.html` → "Open with Live Server"
3. In another terminal, run: `node server.js`
4. The app will use the local backend automatically

### Option B: Python's Built-in Server

```bash
# Navigate to the folder with yoga-generator.html
python -m http.server 8000

# Then open http://localhost:8000/yoga-generator.html
# And in another terminal: node server.js
```

### Option C: Using npx http-server

```bash
# Install globally (one time)
npm install -g http-server

# Run in the folder with yoga-generator.html
http-server

# Then open the URL shown
# And in another terminal: node server.js
```

## Troubleshooting

### "Failed to fetch" error
- ✅ Make sure `node server.js` is running in a terminal
- ✅ Confirm the terminal shows "Server running at http://localhost:3000"
- ✅ Refresh your browser page

### "Can't find module http" or similar
- Install Node.js from https://nodejs.org/
- Restart your terminal

### API key errors
- Make sure you entered your API key in Settings (⚙ button)
- Check that the key starts with `sk-ant-`
- Verify the key is valid at https://console.anthropic.com/account/keys

### Server already in use
If port 3000 is already in use, edit `server.js` and change:
```javascript
const PORT = 3000;
```
to a different port like `3001`, then restart the server.

## How the Backend Works

1. Your browser sends a request to `http://localhost:3000/api/generate` with your API key
2. The backend receives the request (CORS is handled here)
3. The backend forwards your request to the Anthropic API with the API key in headers
4. The Anthropic API responds back through the backend
5. Your browser receives the response

This way:
- ✅ Browser security is satisfied (no cross-origin issues)
- ✅ Your API key stays in the backend (more secure)
- ✅ The app works reliably

## Questions?

Check the browser console (F12 → Console tab) for detailed error messages.
