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

  // Log key format for debugging (only show first/last few chars)
  const keyPreview = apiKey.substring(0, 10) + '...' + apiKey.substring(apiKey.length - 5);
  console.log(`📝 API Key format check: ${keyPreview} (length: ${apiKey.length})`);
  console.log(`🔑 Sending to Anthropic with headers:`, {
    'Content-Type': 'application/json',
    'x-api-key': `${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 5)}`,
    'anthropic-version': '2023-06-01'
  });

  const payload = JSON.stringify({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
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
        
        console.log(`Anthropic API Response (${proxyRes.statusCode}):`, JSON.stringify(parsed).substring(0, 500));
        
        // If error, add diagnostic info
        if (proxyRes.statusCode === 401) {
          parsed.keyPreview = apiKey.substring(0, 10) + '...' + apiKey.substring(apiKey.length - 5);
          parsed.keyLength = apiKey.length;
          parsed.diagnostic = 'API key was rejected. Check console.anthropic.com to verify key is valid.';
        }
        
        // Send back as JSON
        res.status(proxyRes.statusCode).json(parsed);
      } catch (error) {
        console.error('Failed to parse Anthropic response:', responseData);
        res.status(502).json({ 
          error: 'Invalid response from Anthropic API',
          details: responseData.substring(0, 200),
          statusCode: proxyRes.statusCode
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
