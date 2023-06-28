const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as Rotas
const index = require('./routes/index');
const product = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    const currentDate = new Date().toUTCString();
    console.log(`[${currentDate}] ${req.method} ${req.url}`);
    next();
});

app.use('/', index);
app.use('/products', product);

module.exports = app;