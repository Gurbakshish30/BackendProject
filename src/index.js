//require('dotenv').config({path:'/.env'}) destroys consistency
import dotenv from "dotenv";

import connectDB from "../db/index.js";

//added --experimental-jason-modules in dev in package.json
dotenv.config({
    path: './.env'
})


connectDB();













/*
import express from "express";
const app=express();

//iife 
( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()

*/
