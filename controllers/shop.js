const Product = require('../models/product');


exports.getProduct = (req, res, next) => {
    const product = req.params.productId;
    res.send(product);
}