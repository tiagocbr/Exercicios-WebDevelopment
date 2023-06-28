const express = require('express');
const router = express.Router();
const array = require('../../postArray')

router.post('/', (req, res, next) => {
    res.status(200).send(array);
});

module.exports = router;