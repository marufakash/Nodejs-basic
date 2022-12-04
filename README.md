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