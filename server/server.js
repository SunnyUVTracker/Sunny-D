const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
// const path = require('path');

const URI =
  'const uri = "mongodb+srv://pjkty:JJKYty97%21@cluster.kkyleu9.mongodb.net/?retryWrites=true&w=majority";';

// Data Base
mongoose.connect('mongodb://localhost/SunnyD', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// App Router
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const api = express.Router();
app.use('/api', api);

api.get('/submit/:username', userController.getUser, (req, res)=>{
  return res.status(200).json(res.locals.data);
})

// Record Button Click Route
// Date, Points, Username
api.post('/submit', userController.updateUser, (req, res) => {
  return res.status(200).json(res.locals.totalPoints);
});

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
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
