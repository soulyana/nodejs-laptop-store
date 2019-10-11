const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);
// console.log(__dirname); absolute path
console.log(laptopData); //becomes an obj

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;
   
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('This is the PRODUCTS page!');
    }

    else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(`This is the LAPTOP page for laptop ${id}!`);
    }

    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('URL was not found on the server!');
    }

  
});

// standard node port, localhost/my computer ip address
server.listen(1337, '127.0.0.1', () => { 
    console.log('Listening for requests now');
});

