import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

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

//middlewares

app.use("/api/auth",authRoute);
app.use("/api/user",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);




/*
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
});
*/


app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend");
})