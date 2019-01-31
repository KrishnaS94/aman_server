'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
var log4js = require('log4js');
const cors = require('cors');
log4js.configure({
  appenders: {
    Aman_project: { type: 'dateFile', filename: './log/Aman_Project_'+ new Date().getFullYear() + "-"+ (new Date().getMonth()+ 1) + "-"+ new Date().getDate()+'.log'}
  },
  categories: {
    default: { appenders: [ 'Aman_project' ], level: 'debug' }
  }
});
const logger = log4js.getLogger('Aman_project');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
require('./routes')(router);
app.use('/',router);
const port = process.env.PORT || 8082;
app.listen(port);
console.log(`App Runs on ${port}`);
logger.fatal(`Server has started App is Running on Port ${port}`);