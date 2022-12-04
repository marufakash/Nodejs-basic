## Node js
- Node js is an open-source server environment.
- Node.js is a back-end JavaScript runtime environment.
- Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS.

### 1.1 Node js modules( is a set of function )

- Node js has three modules

1. Local module `created locally in your Node js application.`
2. Build-in modules which you can use without any further installation.`(http, url, path, fs, os).`
3. External modules `managed by npm.`

### 2.1 fs module (writeFile, appendFile, readFie, renameFile, unlink, Exists)

```JavaScript
const fs = require('fs');
```

- writeFile
```JavaScript
// writeFile
fs.writeFile('demo1.txt', 'This is demo 1 file.', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})
```

- appendFile
```JavaScript
// appendFile
fs.appendFile('demo1.txt','My name is Maruf Akash', (err) => {
    if(err) {
        console.log(err);
    }else{
        console.log('Successful');
    }
})
```

- readFile
```JavaScript
// readFile
fs.readFile('demo1.txt','utf-8', (err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
```

- renameFile
```JavaScript
// rename
fs.rename('demo1.txt','demo2.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})
```

- unlink
```JavaScript
// unlink
fs.unlink('demo2.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})
```

### 2.2 os module - hostname(), homedir(), userInfo(), totalmem(), freemem()
```JavaScript
const os = require('os');
console.log(os);
```
```JavaScript
const {hostname, homedir, userInfo, totalmem, freemem} = require('os');

console.log(hostname());
console.log(homedir());
console.log(userInfo());
console.log(totalmem());
console.log(freemem());
```

### 2.3 path module - extname() , join()

```JavaScript
const path = require('path');
console.log(path);

const extensionName = path.extname('index.html');
console.log(extensionName);

const joinName = path.join(__dirname + '/../views/img');
console.log(joinName);
```

### 2.4 http module 

```JavaScript
const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
    res.end("Hello, i am your first server.");
})

myServer.listen(3000, () => {
    console.log(`your server is running at http://${hostname}:${port}`);
})
```

```JavaScript
// For request there are some common methods = get(), post(), delete(), put(), head()
// In response we will get status code and data (including head and body)
const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type':'text/html'})
    res.write("<h1>Hello, i am your first server.</h1>");
    res.end();
})

myServer.listen(3000, () => {
    console.log(`your server is running at http://${hostname}:${port}`);
})
```

### 2.5 http routing and nodemon package

`The HTTPRoute resource allows you to match on HTTP traffic and direct it to Kubernetes backends.`

`nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.`

- first npm init -y
- create server
- npm instal nodemon

```JavaScript
const http = require("http");
const PORT = 3000;
const hostName = "127.0.0.1";
const fs = require("fs");

const mySerrver = http.createServer((req,res) => {
    const handleReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err,data) => {
            res.writeHead(statusCode, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }

    if(req.url === '/'){
        handleReadFile(200,"./Pages/indes.html");
    }else if(req.url === '/about'){
        handleReadFile(200,"./Pages/about.html");
    }else if(req.url === '/contact'){
        handleReadFile(200,"./Pages/contact.html");
    }else{
        handleReadFile(404, "./Pages/error.html");
    }
})

mySerrver.listen(PORT, hostName, () => {
    console.log(`your server is running at http://${hostName}:${PORT}`);
})
```