const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/':
            const file = fs.readFileSync('./index.html');
            res.writeHead(200, { "Content-Type": "text/html"});
            res.end(file)
            break;
        case '/index.js':
            res.writeHead(200, { "Content-Type": "text/javascript"});
            res.end(fs.readFileSync('./index.js'))
            break;
    }
})

server.listen(3000)