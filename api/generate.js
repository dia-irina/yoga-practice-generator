const https = require('https');

module.exports = function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { apiKey, system, messages } = req.body;

  if (!apiKey) {
    res.status(400).json({ error: 'API key is required' });
    return;
  }

  const payload = JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2048,
    system: system,
    messages: messages
  });

  const options = {
    hostname: 'api.anthropic.com',
    port: 443,
    path: '/v1/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    }
  };

  const proxyReq = https.request(options, (proxyRes) => {
    let responseData = '';

    proxyRes.on('data', (chunk) => {
      responseData += chunk.toString();
    });

    proxyRes.on('end', () => {
      try {
        // Validate response is JSON
        const parsed = JSON.parse(responseData);
        
        // Send back as JSON
        res.status(proxyRes.statusCode).json(parsed);
      } catch (error) {
        console.error('Failed to parse Anthropic response:', responseData);
        res.status(502).json({ 
          error: 'Invalid response from Anthropic API',
          details: responseData.substring(0, 200)
        });
      }
    });
  });

  proxyReq.on('error', (error) => {
    console.error('API request error:', error);
    res.status(500).json({ error: 'Failed to reach Anthropic API', details: error.message });
  });

  proxyReq.write(payload);
  proxyReq.end();
};
