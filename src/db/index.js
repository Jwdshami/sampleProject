import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";


const connectDB=async()=>{
    try {
       const db_Connection= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

       console.log(`\n Monngo DB Connected !! DB Host ${db_Connection.connection.host}` )
        
    } catch (error) {

        console.log("Mongodb DB Error in Connection",error);
        process.exit(1)
    }
}

export default connectDB;