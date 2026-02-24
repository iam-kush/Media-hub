import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try{
       const connectioninstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`connected database:${connectioninstance}`);
    }catch(error){
        console.log("connection error FAILED",error)
        process.exit(1)
    }
}

export default connectDB