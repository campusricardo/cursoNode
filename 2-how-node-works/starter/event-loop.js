const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;
setTimeout(() => console.log('Timeout'), 0);
setImmediate(() => console.log('Immediate'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('----------------------------');

  setTimeout(() => console.log('Timeout 2 '), 0);
  setTimeout(() => console.log('Timeout 3 '), 3000);
  setImmediate(() => console.log('Immediate 2'));

  process.nextTick(() => console.log('Proccess.nextTick'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password encrypted');
  });
});

console.log('Hello World');
