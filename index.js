require("dotenv").config();
const express=require('express');
const app =express();

port =process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Now server started for node app")
});

app.listen(port,()=>{
    console.log("server up now",port);
})