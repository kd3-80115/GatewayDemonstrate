const express=require('express');
const cors=require('cors');
const app=express();
const mongoose = require('mongoose');

app.use(cors('*'));
app.use(express.json());


//connecting to mongo db
mongoose.connect('mongodb://127.0.0.1:28017/catalog_service_db');

//add routes
const catalogRouter=require('./routes/catalog');
app.use("/catalog",catalogRouter);

app.listen(4100,()=>{
    console.log("catalog service started on port 4100");
})
