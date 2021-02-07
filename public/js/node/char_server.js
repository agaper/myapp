const http = require('http');
const iconv = require('iconv-lite');

const server = http.createServer((req, res) => {
  let chunks = [];
  req.on('data', (chunk) => {
    chunks.push(chunk);
  });
  req.on('end', () => {
    chunks = Buffer.concat(chunks);
    let body = iconv.decode(chunks, 'gbk');

    res.end(`this is from server ${body} \n  *** server end *** ${__dirname} char_server.js`);
  });
});

server.listen(3000);