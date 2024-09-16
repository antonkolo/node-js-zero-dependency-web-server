import fs from 'node:fs';
import http from 'node:http';
import url from 'node:url';

// define hardcoded values
const PORT = 3000;
const MIME_TYPES = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};

// create a server
const server = http.createServer(function (req, res) {
  // if path not public, return 403
  const urlStart = req.url.split('/')[1];
  if (urlStart !== 'public') {
    res.writeHead(403);
    res.write('403: Access restricted.');
    console.log(urlStart);
    res.end();
    return;
  }
  // try reading the path and check if files exists, if not, return 404
  fs.access();
});

// run server
server.listen(PORT, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + PORT);
  }
});
