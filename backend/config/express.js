const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
var compression = require('compression');
var helmet = require('helmet');

module.exports = () => {

  const app = express();

  // SET PORT
  app.set('port',config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());
  app.use(compression()); //Compress all routes
  app.use(helmet());

  require('../api/routes/prices')(app);

  return app;
};
