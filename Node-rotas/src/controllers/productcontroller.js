'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getBySlug = (req, res, next) => {
    Product.find({ slug: req.params.slug })
        .then(x => {
            res.status(201).send(x);
        }).catch(e => {
            res.status(400).send(e);
        })
}

exports.get = (req, res, next) => {
    Product.find({}, 'title price')
        .then(x => {
            res.status(201).send(x);
        }).catch(e => {
            res.status(400).send(e);
        })
}


exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save().then(x => {
        res.status(201).send({ message: 'ProduTo cadastrado' });
    }).catch(e => {
        res.status(400).send({ message: 'falha no cadastro', data: e });

    });

}


exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};