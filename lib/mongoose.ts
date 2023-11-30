import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async()=>{
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URL) return console.log("MongoDB url is not available");

    if(isConnected){
        console.log("MongoDB connection already established");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log("MongoDB connected successfully")
    }catch(error){
        console.log(error)
    }
}