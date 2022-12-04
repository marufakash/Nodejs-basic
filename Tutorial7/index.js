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