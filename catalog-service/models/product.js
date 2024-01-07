const mongoose=require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, 
  description: String,
  price: Number,
});

module.exports=mongoose.model('product',productSchema);