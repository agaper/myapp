const http = require('http');
const fs = require('fs');
const path = require('path');

// ab -n 100 -c 100 http://localhost:8000/
// 进行大并发请求的操作

// const server = http.createServer(function (req, res) {
//     const method = req.method;
//     if( method === 'GET' ){
//       const fileName = path.resolve(__dirname, 'data.txt');
//       let stream = fs.createReadStream(fileName);
//       stream.pipe(res);
//     }
// });

// const server = http.createServer((req, res) => {
//   const method = req.method;
//   if( method === 'GET' ){
//     const fileName = path.resolve(__dirname, 'data.txt');
//     fs.readFile(fileName, (err, data) => {
//       if( err ){
//         throw new Error(err);
//         return;
//       }
//       res.end(data);
//     });
//   }
// });

// server.listen(8000);


// const fileSrc = path.resolve(__dirname, 'data.txt');
// const fileDest = path.resolve(__dirname, 'data-copyed.txt');

// const readStream = fs.createReadStream(fileSrc);
// const writeStream = fs.createWriteStream(fileDest);

// readStream.pipe(writeStream);
// readStream.on('end', () => {
//   console.log('拷贝完成');
// });

// var fork = require('child_process').fork;
// var cpus = require('os').cpus();

// for(var i=0; i<cpus.length; i++){
//   console.log(cpus[i]);
// }

