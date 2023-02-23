/*
const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
*/

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log('Hello World')
})

app.listen(3000)