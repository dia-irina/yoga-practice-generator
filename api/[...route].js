const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // If it's an /api request that's not /api/generate, return 404
  if (req.url && req.url.startsWith('/api')) {
    res.status(404).json({ error: 'API endpoint not found' });
    return;
  }
  
  // For all other requests, serve index.html (SPA fallback)
  try {
    const htmlPath = path.join(__dirname, '../public/index.html');
    const html = fs.readFileSync(htmlPath, 'utf-8');
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).send(html);
  } catch (error) {
    console.error('Error serving index.html:', error);
    return res.status(500).send('Error loading application');
  }
};
