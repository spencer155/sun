const express = require('express');

const app = express();
app.get('/users', (req, res) => {
  res.json({ code: 200, data: [{ id: 1, name: 'sun' }] });
});
app.listen(3000);
