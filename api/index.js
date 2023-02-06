import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app=express();
dotenv.config(); //bitno za -env varijable

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    }catch(error){
    handleError(error);
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
});

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
});



app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend");
})