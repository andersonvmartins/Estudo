const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Product',ProductsSchema);
