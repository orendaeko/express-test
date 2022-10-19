const app = require('express')();

app.get('/api', (req, res) => {
  res.json({ res: `Hello! ` });
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.json({ res: `Item: ${slug}` });
});

module.exports = app;