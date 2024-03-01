//const mongoose=require("mongoose");
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DATABASENAME= process.env.DB_USERNAME;
const Connection= async()=>{
    try{
     await mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASENAME}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}); 
console.log(" database cconnection successfully");}
  catch(e){console.log(e);}

}
export default Connection;