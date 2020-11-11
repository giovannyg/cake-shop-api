const express = require('express')
const bodyParser = require('body-parser');

require('./db');
const cakeController = require('./controllers/CakeController');

const app = express();
app.use(bodyParser.json());

app.listen(3000);

app.use('/cakes', cakeController);

