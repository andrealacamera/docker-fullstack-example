const http = require('http');
// const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();


//load the routers
const testR = require('./api/test/router');
const middleR = require('./api/middle_earth/router');

//set up the server
const server = express();

server.use(cookieParser()); //cookie Parser middleware 
server.use(express.json()); //json requests 

// generic middleware 
server.use( (req,res,next) => {
  const now = new Date().toJSON();
  console.log(`NOW is ${now}`);
  console.log(process.env)
  next();
})

// set up ROUTES

server.use('/api/test/', testR);
server.use('/api/middle_earth/', middleR);

http.createServer(server).listen(process.env.APP_PORT, () => {
  console.log(`Server HTTP is listening on port ${process.env.APP_PORT}`)
});