const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path')

const productsControllers = require('../controllers/products');


router.get('/add-product', productsControllers.getAddProduct);

router.post('/add-product', productsControllers.postAddProduct);


module.exports = router;