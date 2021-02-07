var http = require('http');
var iconv = require('iconv-lite');

var charset = 'gbk';

var reqBuffer = iconv.encode('中文, this is client side', charset);

var options = {
  hostname: '127.0.0.1',
  port: '3000',
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
    'Content-Encoding': 'identity',
    'Charset': charset,
  }
}

var client = http.request(options, (res) => {
  res.pipe(process.stdout);
});

client.end(reqBuffer);