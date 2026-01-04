import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'dist');

// Middleware para logging básico
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Endpoint de depuración (Vital para ver qué hay en el servidor)
app.get('/debug-ls', (req, res) => {
    const getAllFiles = function (dirPath, arrayOfFiles) {
        let files = [];
        try {
            files = fs.readdirSync(dirPath);
        } catch (e) {
            return [`Error reading ${dirPath}: ${e.message}`];
        }

        arrayOfFiles = arrayOfFiles || [];
        files.forEach(function (file) {
            if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
                arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
            } else {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        });
        return arrayOfFiles;
    };

    try {
        const files = getAllFiles(PUBLIC_DIR);
        const relativeFiles = files.map(f => f.replace(PUBLIC_DIR, ''));
        res.json({ root: PUBLIC_DIR, files: relativeFiles });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Servir archivos estáticos con Headers de Cache optimizados
app.use(express.static(PUBLIC_DIR, {
    maxAge: '1y',
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    }
}));

// SPA Fallback: Cualquier ruta que no sea un archivo, sirve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Production server running at http://0.0.0.0:${PORT}`);
    console.log(`📁 Serving content from: ${PUBLIC_DIR}`);
});
