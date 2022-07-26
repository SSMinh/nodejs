const path = require('path');
const express = require('express');   
const morgan = require('morgan');
const route = require('./routes');
const { engine } = require('express-handlebars');
const db = require('./config/db')
const app = express();
const post = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())
//connect db
db.connect()
//temple engine
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

route(app);
app.listen(post, () => console.log(`express ${post}`));
