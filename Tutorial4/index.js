// path - extname, join

const path = require('path');
// console.log(path);

const extensionName = path.extname('index.html');
console.log(extensionName);

const joinName = path.join(__dirname + '/../views/img');
console.log(joinName);


