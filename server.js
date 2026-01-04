import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

    // Debug Endpoint to list files (Critical for deployment debugging)
    if (req.url === '/debug-ls') {
        const getAllFiles = function (dirPath, arrayOfFiles) {
            let files = []
            try {
                files = fs.readdirSync(dirPath)
            } catch (e) {
                return [`Error reading ${dirPath}: ${e.message}`];
            }

            arrayOfFiles = arrayOfFiles || []
            files.forEach(function (file) {
                if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                    arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
                } else {
                    arrayOfFiles.push(path.join(dirPath, "/", file))
                }
            })
            return arrayOfFiles
        }

        try {
            const files = getAllFiles(PUBLIC_DIR);
            // Clean paths for display
            const relativeFiles = files.map(f => f.split('dist')[1] || f);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                root: PUBLIC_DIR,
                files: relativeFiles
            }, null, 2));
        } catch (e) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: e.message, stack: e.stack }));
        }
        return;
    }

    // Normalizar URL (quitar query string)
    let urlPath = req.url.split('?')[0];

    // Default to index.html for root
    if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

    let filePath = path.join(PUBLIC_DIR, urlPath);
    let ext = path.extname(filePath).toLowerCase();

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found

            // If it's an asset (js/css/media), return 404 cleanly to avoid MIME errors
            if (urlPath.startsWith('/assets/') || (ext !== '' && ext !== '.html')) {
                console.error(`404 Not Found: ${filePath}`);
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end(`404 Not Found: ${urlPath}`);
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
        // No caching for index.html to avoid version mismatches
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
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
            // Cache immutable assets for a long time
            let headers = { 'Content-Type': contentType };
            if (filePath.includes('/assets/')) {
                headers['Cache-Control'] = 'public, max-age=31536000, immutable';
            }
            res.writeHead(200, headers);
            res.end(content);
        }
    });
}

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
    console.log(`Serving files from: ${PUBLIC_DIR}`);
});
