const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

const Product = mongoose.model('product', productSchema, 'Products');

module.exports.Product = Product;