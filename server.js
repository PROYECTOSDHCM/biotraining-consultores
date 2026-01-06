const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta absoluta a la carpeta dist
const distPath = path.join(__dirname, 'dist');

// Servir archivos estáticos desde dist
app.use(express.static(distPath));

// Para SPA: cualquier ruta devuelve index.html de dist
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
