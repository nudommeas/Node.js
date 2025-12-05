const path = require('path');
const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/products')
const shopControllers = require('../controllers/shop');

router.get('/', productControllers.getProducts);

router.get('/products/productId', shopControllers.getProduct);

module.exports = router;