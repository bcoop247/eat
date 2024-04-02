const express = require('express')
const app = express();
const db = './db';

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});