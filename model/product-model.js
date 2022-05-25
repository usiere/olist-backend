
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id : String,
    product_category_name : String,
    product_category_name: String,
    product_name_lenght: String,
    product_photos_qty: String,
    product_weight_g: String,
    product_length_cm: String,
    product_height_cm: String,
    product_width_cm: String
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
