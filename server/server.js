const express = require('express');
const app = express();
const api = require('./api/api');
const config = require('./config/config');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

if (config.seed) {
  require('./util/seed');
}
// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);

// export the app for testing
module.exports = app;
