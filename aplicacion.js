const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    let filePath = '';
    if (req.url === '/tailPage') {
        filePath = path.join(__dirname, 'tail.html');
    } else {
        filePath = path.join(__dirname, 'head.html');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Página no encontrada');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://192.168.1.191:${PORT}`);
});
