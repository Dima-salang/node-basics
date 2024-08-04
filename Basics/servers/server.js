const http = require('http'); 

// create a server that takes in the request and response
const server = http.createServer((req, res) => {
    
    console.log('request made...');
    console.log(req);
 
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