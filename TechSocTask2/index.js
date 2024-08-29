const express=require('express');
const app=express();
const {connectToMongoDB}=require("./connect");
const path=require('path');
const staticRouter=require("./routes/staticRouter");

connectToMongoDB("mongodb://localhost:27017/college")
.then(()=>{console.log("MongoDB connected...")})
.catch((error)=>{console.log("Error in connection...")});

//Middlewares to parse data...
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//To set ejs, embedded javascript templating...
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));

app.use("/",staticRouter);

app.listen(8000,()=>{
    console.log("Server Started...");
});