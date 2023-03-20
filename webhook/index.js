const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://100.25.166.161:${port}`);
});
