const express = require("express");
const router = express.Router();
const Seller = require("../model/seller-model");

router.post("/seller", async (req, res) => {
  console.log( req.body.seller_id)
  // find one, if it is successful then send a success 200 message.
  Seller.findOne({
   
    
seller_city: req.body.seller_id,
    seller_zip_code_prefix: req.body.code,
  })
    .then((seller) => {
      res.status(200).json(seller);
      console.log("seller", seller);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;
