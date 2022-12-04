// os - hostname(), homedir(), userInfo(), totalmem(), freemem()

// const os = require('os');
// console.log(os);

const {hostname, homedir, userInfo, totalmem, freemem} = require('os');

console.log(hostname());
console.log(homedir());
console.log(userInfo());
console.log(totalmem());
console.log(freemem());


