var iconv = require('iconv-lite');
var text = '你好';

var encodedBuff = iconv.encode(text, 'utf8');
console.log('encode ', encodedBuff, encodedBuff.length);

console.log('decode ', iconv.decode(encodedBuff, 'utf8') );

