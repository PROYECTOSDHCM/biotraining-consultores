const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Normalizar URL (quitar query string)
    let urlPath = req.url.split('?')[0];

    // Default to index.html for root
    if (urlPath === '/') urlPath = '/index.html';

    let filePath = path.join(PUBLIC_DIR, urlPath);
    let ext = path.extname(filePath).toLowerCase();

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found

            // If it's an asset (js/css/media), return 404 cleanly
            if (urlPath.startsWith('/assets/') || ext !== '') {
                console.error(`404 Not Found: ${filePath}`);
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }

            // For SPA routing: if not an asset, serve index.html
            console.log(`SPA fallback for: ${urlPath}`);
            ensureIndexHtml(res);
            return;
        }

        // File exists, serve it
        serveFile(res, filePath, ext);
    });
});

function ensureIndexHtml(res) {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    fs.readFile(indexPath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
}

function serveFile(res, filePath, ext) {
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Serving files from: ${PUBLIC_DIR}`);
});
