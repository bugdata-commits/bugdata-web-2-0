import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve('.');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function safePath(urlPath) {
  const pathname = decodeURIComponent(new URL(urlPath, 'http://localhost').pathname);
  const candidate = normalize(join(root, pathname));
  return candidate.startsWith(root) ? candidate : null;
}

async function resolveFile(urlPath) {
  const requested = safePath(urlPath);
  if (!requested) return null;
  try {
    const info = await stat(requested);
    if (info.isFile()) return requested;
    if (info.isDirectory()) {
      const index = join(requested, 'index.html');
      await stat(index);
      return index;
    }
  } catch {}
  if (urlPath === '/') return join(root, 'index.html');
  return null;
}

const server = createServer(async (req, res) => {
  try {
    const file = await resolveFile(req.url || '/');
    const finalFile = file || join(root, '404.html');
    const body = await readFile(finalFile);
    const is404 = !file;
    res.writeHead(is404 ? 404 : 200, {
      'Content-Type': types[extname(finalFile)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(body);
  } catch (error) {
    res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(`BugData Web 2.0 server error: ${error.message}`);
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`BugData Web 2.0 listening on http://0.0.0.0:${port}`);
});
