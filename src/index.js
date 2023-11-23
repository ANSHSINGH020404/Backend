// require ('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import { app } from "./app.js";
// import express from "express"
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants"
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000 ,()=>{
        console.log(`server is  running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
  console.log("mongodb connection failed !!!",err);
})





/*
const app =express();
;( async() => {
   try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error) =>{
        console.log("ERROR",error);
        throw err
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`listening to port ${process.env.PORT}`);
    })

   } catch (error) {
    console.error("ERROR",error)
    throw err
   }
})()
*/
