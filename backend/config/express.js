const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  // SET PORT
  app.set('port',config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  require('../api/routes/prices')(app);

  return app;
};
