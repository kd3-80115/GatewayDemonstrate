const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors('*'));
app.use(express.json());

//add routes
const cartRouter=require('./Routes/cart');
app.use("/cart",cartRouter);

app.listen(4200,()=>{
    console.log("cart service started on port 4200");
})
