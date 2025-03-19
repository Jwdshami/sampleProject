import { request } from "express";



// here there is the condition is async and await to handle the api responses .
const asyncHandler=()=>{
    (req,res,next)=>{
Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler};
