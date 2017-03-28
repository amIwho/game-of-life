const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Ok');
});

app.get('/items', (req, res) => {
  res.json({
    items: [0, 0, 0, 0, 1, 1, 1, 0],
  });
});

module.exports = app;
