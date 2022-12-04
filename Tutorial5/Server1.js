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