const http = require('http');
const { URL } = require('url');
const path = require('path');
const { constants } = require('fs');
const fs = require('fs/promises');

const RootDir = path.resolve(__dirname, '..');

const ExtMap = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.md': 'text/plain',
  '.txt': 'text/plain',
};

const checkFileExists = async (path) => {
  return fs
    .access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

const server = http.createServer(async (req, res) => {
  const urlInstance = new URL(req.url, `http://${req.headers.host}`);
  const filePath = path.join(RootDir, urlInstance.pathname);

  if (!(await checkFileExists(filePath)) || filePath.slice(-1) === '/') {
    const indexHtml = await fs.readFile(path.join(RootDir, 'index.html'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(indexHtml);
    return;
  }

  const file = await fs.readFile(filePath);
  const ext = path.extname(urlInstance.pathname);
  res.statusCode = 200;
  res.setHeader('Content-Type', ExtMap[ext] || 'text/plain');
  res.end(file);
});

server.on('request', (req, res) => {
  console.log(`Recieved request: ${req.method} ${req.url}`);

  res.on('finish', () => {
    console.log(`Closing request: ${res.getHeader('Content-Type')}`);
  });
});

server.listen(8000, () => {
  console.log('starting http server on port 8000 ...');
});
