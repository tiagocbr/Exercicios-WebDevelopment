const express = require('express');
const router = express.Router();
router.post('/', (req, res, next) => {
    res.status(200).send({ message: "ola" });
});

module.exports = router;