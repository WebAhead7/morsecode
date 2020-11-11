const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const missingHandler = require('./handlers/missingHandler');
const dataHandler = require('./handlers/dataHandler');

module.exports = (req, res) => {
  const { url } = req;
  if (url === '/') {
    homeHandler(req, res);
  } else if (url.includes('public')) {
    publicHandler(req, res);
  } else if (url.includes('data')) {
    dataHandler(req, res);
  } else {
    missingHandler(req, res);
  }
};
