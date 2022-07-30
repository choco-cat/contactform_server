import { Request, Response, NextFunction } from 'express';
const express = require('express');

const contactRouter = require('./resources/contactform/contact.router');

const app = express();

app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {

  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/contact', contactRouter);

module.exports = app;
