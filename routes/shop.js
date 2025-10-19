const path = require('path');
const express = require('express');
const router = express.Router();

const admin = require('./admin');

router.get('/', (req, res, next) => {
    res.render('shop')
})

module.exports = router;