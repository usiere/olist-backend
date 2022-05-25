const express = require('express');
const router = express.Router();
const Order =  require('../model/order-model');

const Product =  require('../model/product-model');



router.get('/order_items', async (req, res) => {
  let product_name = '';


  console.log(req.query);
  const skip = parseInt(req.query.skip);
 console.log(skip)
      Order.find().limit(30).skip(skip).then(
        (orders) => {
          let data = [];
         orders.forEach(arrange);

          var name = '';
         async function arrange(order) {
           Product.findOne({product_id: order.product_id}).then((product) => {
         product_name = product.product_category_name
            console.log( product.product_category_name);

          name = product.product_category_name;
          });

           let ord = {
            id: order.order_item_id,
            product_id: order.product_id,
            product_category: name,
            price: order.price,
            date: order.shipping_limit_date
           }
          await  data.push(ord)
        }

        console.log('name',)

        const response = {
          data,
          total: orders.length,
          limit: 20,
          offset: skip
        }
        
          res.status(200).json(response);
          console.log('response', response)
        }
      ).catch(
        (error) => {
          console.log(error)
          res.status(400).json({
            error: error
          });
        }
      );

 });


 router.delete('/delete/:id', async (req, res) => {
  Order.deleteOne({ _id: req.id }). then( () => {
    res.status(200).json();
    console.log('success')

  }).catch(
    (error) => {
      console.log(error)
      res.status(400).json({
        error: error
      });
    }
  );
 })


 router.post('/edit:id', async (req, res) => {
  Order.findOneAndUpdate({ _id: req.id }, req.body). then(() => {
    res.status(200).json();
  }).catch(
    (error) => {
      console.log(error)
      res.status(400).json({
        error: error
      });
    }
  );
 })


module.exports = router;


