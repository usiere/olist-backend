
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id : String,
    order_item_id : String,
    product_id: String,
    seller_id: String,
    shipping_limit_date: String,
    price: String,
    freight_value: String
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
