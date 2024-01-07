const express = require("express");
const cryptoJs = require("crypto-js");
const router = express.Router();
const utils = require("../utils");
const Product=require('../models/product');


router.get('/',(request,response)=>{
  Product.find().then(
    result=>{
      response.send(result);
    }
  ).catch(
    error=>{
      response.send(error);
    }
  );
});

//add data to catalog
router.post('/',(request,response)=>{
    const {title,description,price}=request.body;
    const product=new Product();
    product.title=title;
    product.description=description;
    product.price=price;
    product.save().then(
      result=>{
        response.send(utils.createSuccessResult(result));
      }
    ).catch(
      error=>{
        response.send(utils.createErrorResult(error));
      }
    );
});

module.exports=router;