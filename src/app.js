// Sab sa pehla tu app.js me express ko import krte a 

import express, { urlencoded } from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
// app variable make the express aplication instance 
const app=express();

// research about this 
// cors configuration use to manage the cors origin request to proceed to the same port
app.use(cors({
origin:process.env.CORS_ORIGIN,
Credential:true
}))
// to handle response to the json above the 16kb
app.use(express.json({limit:"16kb"}))
// 
app.use(express.urlencoded({extended:true,limits:"16kb"}))
app.use(express.static("Public"))
app.use(cookieParser())

export {app}