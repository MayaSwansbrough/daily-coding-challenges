const http = require('http');

// Create a server object
http.createServer((req, res) => {
    // Write a response
    res.write("Hello world");
    res.end();
}).listen(8000, () => console.log("Server running"));