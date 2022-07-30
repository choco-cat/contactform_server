const express = require('express');

const contactRouter = require('./resources/contactform/contact.router.js');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/contact', contactRouter);

module.exports = app;
