const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const strings = ['It\'s getting dark...', 'My day was productive...', 'I\'m happy to be helping science...', 'It\'s very lonely here...', 'I hope this day isn\'t my last...', 'The sunset is beautiful...', 'Martian soil is my home...', 'It\'s getting cold...']; // Replace with your list of strings

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ string: randomString }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});