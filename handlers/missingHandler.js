module.exports = (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.end('<h1>Error Path</h1>');
};
