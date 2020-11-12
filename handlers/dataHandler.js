const url = require('url');
const querystring = require('querystring');
const request = require('request');

module.exports = (req, res) => {
  const { query } = url.parse(req.url);
  const queryParsed = querystring.parse(query);
  const { data } = queryParsed;

  const options = {
    url: `http://www.morsecode-api.de/encode?string=${data}`,
    timeout: 10000,
  };

  request.get(options, (err, _, body) => {
    res.setHeader('content-type', 'application/json');
    if (err) {
      res.statusCode = 408;
    }
    res.end(body);
    // eslint-disable-next-line comma-dangle
  });
};
