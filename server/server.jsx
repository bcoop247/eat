const express = require('express');
const app = express();
const cors = require('cors');
const db = './db';

//GLOBAL MIDDLEWARE
app.use(cors());
app.use(f);

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/new', (req, res) => {
  res.send('This is the new endpoiint')
  console.log('Log');

})


const f = (req, res, next) => {
  console.log('TEST')
  next()

}






const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});