let crypto = require('crypto');

function cryptoContent(content){
  if(!content) return;
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex');
}


let encoded = cryptoContent('1你好啊');

console.log( encoded )