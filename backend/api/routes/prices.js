module.exports = app => {
  const controller = require('../controllers/pricesController')();

  app.route('/api/prices')
    .get(controller.getPrices);
}
