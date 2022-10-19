const app = require('express')();

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.json(`Hello! `);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.json(`Item: ${slug}`);
});

module.exports = app;