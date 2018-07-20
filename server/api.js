const express = require('express');
const path = require('path');
const api = express();
const phoneVerification = require('./phoneVerification');
const bodyParser = require('body-parser');

api.use(bodyParser.json());                           // to support JSON-encoded bodies
api.use(bodyParser.urlencoded({ extended: true }));   // to support URL-encoded bodies

api.post('/users', (req, res) => {
  console.log('ExplorerAPI has received posty request to /users route');
  res.status(200).send('ExplorerAPI has received post request to /users route');
});

api.post('/request-verification', (req, res) => {
  console.log('ExplorerAPI received request to /verify route');
  phoneVerification.requestPhoneVerification(req, res);
});

api.post('/verify-token', (req, res) => {
  console.log('ExplorerAPI received request to /verify route');
  phoneVerification.verifyPhoneToken(req, res);
});

api.use(express.static(path.join(__dirname, 'public')));

// api.get('/', (req, res) => {
//   res.status(200).send('ExplorerAPI is running');
// });

module.exports = api;


