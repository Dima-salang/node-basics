const http = require('http'); 
const fs = require('fs');

/* 
    STATUS CODES

    200 - OK
    301 - RESOURCE MOVED
    404 - NOT FOUND
    500 - INTERNAL SERVER ERROR
*/

// create a server that takes in the request and response
const server = http.createServer((req, res) => {
    
    console.log('request made...');
    console.log(req.url, req.method);

    // basic routing
    let path = "../html/";

    switch (req.url) {
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        // case of redirect
        case "/about-me":
            res.statusCode = 301; // resource moved

            // we set the res header
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            res.statusCode = 404;
            path += "404.html";
            break;
    }

    // set header content type to let the browser know what kind of response it is receiving
    res.setHeader('Content-Type', 'text/html');
    
    // read the html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } 

        res.write(data);
        res.end();

        // or alternatively, we can just
        // res.end(data);
    })

 
});

/* 
 Localhost is like a domain name on the web but it takes us to a specific IP: 127.0.0.1
 it connects back to your computer

 Port numbers are like doors into a computer in which different communication can be made to programs

*/

// server will be listening on localhost:3000 and fires a callback function when it gets called.
server.listen(3000, 'localhost', () => {
    console.log('server listening on port 3000');
});