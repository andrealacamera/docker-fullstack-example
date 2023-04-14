const http = require('http');
// const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();


//load the routers
const testR = require('./api/test/router');


//set up the server
const server = express();

server.use(cookieParser()); //cookie Parser middleware 
server.use(express.json()); //json requests 

// generic middleware 
server.use( (req,res,next) => {
  const now = new Date().toJSON();
  console.log(`NOW is ${now}`);
  next();
})

// set up ROUTES
server.use('/api/test/', testR);

http.createServer(server).listen(3213, () => {
  console.log(`Server HTTP is listening on port ${3213}`)
});