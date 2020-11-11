const url = require('url');
const querystring = require('querystring');
const request = require('request');

module.exports = (req, res) => {
  const { query } = url.parse(req.url);
  const queryParsed = querystring.parse(query);
  const { data } = queryParsed;

  request.get(
    {
      url: `http://www.morsecode-api.de/encode?string=${data}`,
    },
    (err, _, body) => {
      if (err) throw err;
      res.setHeader('content-type', 'application/json');
      res.end(body);
      // eslint-disable-next-line comma-dangle
    }
  );
};
