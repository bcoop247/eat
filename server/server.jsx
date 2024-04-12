const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const db = './db';

//GLOBAL MIDDLEWARE
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded( {extended: true} ));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('This is the home page')
})

app.get('/newrecipe', (req, res, next) => {
  res.send('This the new recipe hs been submitted')
})

app.post('/newrecipe', (req, res) => {
    const {recipeName, ingredients, directions} = req.body;
    
      db.query(
        `INSERT INTO recipes (recipe_name, ingredients, directions)
        VALUES($1, $2, $3)`, [recipeName, ingredients, directions]
      ).then(() => {
        console.log('payment info successful')
        res.send('Payment SUCCESSFUL')
      })
      .catch((e) => {
        console.log(e);
      })
});

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


