const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is our home page');
        return; // Exit the function after ending the response
    }
    if (req.url === '/about') {
        res.end('This is our about page');
        return; // Exit the function after ending the response
    }
    // If the URL does not match any known routes, send an error message
    res.end(`<h1> OOPS ERROR </h1> <a href="/"> Back Home </a>`);
});

server.listen(3000)