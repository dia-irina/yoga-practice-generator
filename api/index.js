import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function handler(req, res) {
  try {
    const htmlPath = path.join(__dirname, '../public/index.html');
    const html = fs.readFileSync(htmlPath, 'utf-8');
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (error) {
    console.error('Error serving index.html:', error);
    res.status(500).json({ error: 'Failed to serve application' });
  }
}
