const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://tiago:tiago@cluster0.j7spsbu.mongodb.net/?retryWrites=true&w=majority');

// carrega os models
const Product = require('./models/product')

// Carrega as Rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    const currentDate = new Date().toUTCString();
    console.log(`[${currentDate}] ${req.method} ${req.url}`);
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;