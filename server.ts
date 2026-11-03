import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';

app.use(express.json());

// Health check endpoint for Cloud Run and container orchestrators
app.get('/healthz', (_req, res) => {
  res.status(200).send('OK');
});

const distPath = path.resolve(__dirname, 'dist');

if (process.env.NODE_ENV === 'production' || fs.existsSync(distPath)) {
  // Serve static assets from built Vite bundle
  app.use(express.static(distPath));

  // SPA fallback: return index.html for any client navigation route
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // Development mode fallback with Vite middleware
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
