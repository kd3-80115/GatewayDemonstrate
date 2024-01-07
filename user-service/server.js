const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors('*'));
app.use(express.json());

//add routes
const userRouter=require('./Routes/user');
app.use("/user",userRouter);

app.listen(4000,()=>{
    console.log("user service started on port 4000");
})
