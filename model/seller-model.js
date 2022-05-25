
const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    seller_id : String,
    seller_zip_code_prefix : String,
    seller_city: String,
    seller_state: String
});

const Seller = mongoose.model('Seller', SellerSchema);
module.exports = Seller;

