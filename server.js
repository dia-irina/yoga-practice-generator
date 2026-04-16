#!/usr/bin/env node
/**
 * Simple Yoga Practice Generator Backend
 * This server proxies requests to the Anthropic API, handling CORS and API key security
 * Run with: node server.js
 */

const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Handle proxy requests
  if (req.method === 'POST' && req.url === '/api/generate') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const requestData = JSON.parse(body);
        const apiKey = requestData.apiKey;
        const messages = requestData.messages;
        const system = requestData.system;

        if (!apiKey) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: 'API key is required' }));
          return;
        }

        // Make request to Anthropic API
        const apiPayload = JSON.stringify({
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
            'Content-Length': Buffer.byteLength(apiPayload),
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
            res.writeHead(proxyRes.statusCode);
            res.end(responseData);
          });
        });

        proxyReq.on('error', (error) => {
          console.error('Proxy request error:', error);
          res.writeHead(500);
          res.end(JSON.stringify({ error: error.message }));
        });

        proxyReq.write(apiPayload);
        proxyReq.end();
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`🧘 Yoga Practice Generator Server running at http://localhost:${PORT}`);
  console.log(`📝 Update your app to use this proxy URL for better security`);
});
