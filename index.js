const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('this is great fun');
})

app.use('/', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'not found';
  res.send('404 not found');
})

app.listen(1234,  () => {
  console.log('Listening on port 1234');
})
