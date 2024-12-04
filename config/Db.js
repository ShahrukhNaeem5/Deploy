const mongoose =require("mongoose");

require("dotenv").config({path:"../.env"});

const Db_Connection=async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected");
    } catch (error) {
        console.log("There is an Error in Conection of Database");
    }


}
module.exports=Db_Connection;