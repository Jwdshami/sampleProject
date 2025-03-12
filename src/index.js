// jab b database sa connection krna ha tu try catch me rakhu ku k problems askti ha
// ya prmises mne rakhu ku k resolve reject sa b error handling achay sa hjti ha

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { DB_NAME  } from "./constant.js";

// Data base sa jab b bat krni hu tu response bhejna ya ana mn time lgta ha  isilye isko
// async await mn rakha jaye


dotenv.config({
    path:'./env'
})


connectDB()

















// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("Error in DB", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on the ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR in Connection", error);
//     throw error;
//   }
// })();
