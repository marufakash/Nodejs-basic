const fs = require('fs');
// writeFile
fs.writeFile('demo1.txt', 'This is demo 1 file.', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})
// appendFile
fs.appendFile('demo1.txt','My name is Maruf Akash', (err) => {
    if(err) {
        console.log(err);
    }else{
        console.log('Successful');
    }
})
// readFile
fs.readFile('demo1.txt','utf-8', (err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
// rename
fs.rename('demo1.txt','demo2.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})
// unlink
fs.unlink('demo2.txt', (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Successful');
    }
})



