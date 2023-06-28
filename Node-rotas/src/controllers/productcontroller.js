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
    Product.find({})
        .then(x => {
            res.status(201).send(x);
        }).catch(e => {
            res.status(400).send(e);
        })
}

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
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
    Product.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        }
    }).then(x => {
        res.status(201).send({ message: 'ProduTo atualizado' });
    }).catch(e => {
        res.status(400).send({ message: 'falha na atualização', data: e });

    });
};

exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.params.id).then(x => {
        res.status(201).send({ message: 'ProduTo removido' });
    }).catch(e => {
        res.status(400).send({ message: 'falha na remoção', data: e });

    });
};