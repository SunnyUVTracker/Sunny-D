const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');

// Data Base
mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// App Router
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('client'));

// User Login Route

// Record Button Click Route

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
