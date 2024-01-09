const { createServer } = require('http');

const next = require('next');

const app = next({  
    dev: process.env.NODE_ENV !== 'production'
}); //next behaves differently in production

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

/* 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  */

const dotenv = require("dotenv");
dotenv.config();

/*
const endpoint = process.env.REACT_APP_ENDPOINT;
const address = process.env.REACT_APP_SEED;

console.log(`Environment variables in use: \n ${endpoint} \n ${address}`);

*/


app.prepare().then(() => {
    createServer(handler).listen(3000, (err) => {
        if (err) throw err;
        console.log('Ready on localhost:3000');
    });
});