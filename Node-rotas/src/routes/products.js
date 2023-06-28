const express = require('express');
const router = express.Router();
const controller = require('../controllers/productcontroller');

router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/', controller.delete)
router.get('/:slug', controller.getBySlug)
router.get('/', controller.get)

module.exports = router;