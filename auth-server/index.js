'use strict';

require('dotenv').config();
console.log('mongo', process.env.PORT);

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect('http://localhost:27017/things', options);

// Start the web server
require('./src/app.js').start(process.env.PORT || 3000);
