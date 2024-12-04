const mongoose=require("mongoose");

const Users_schema=new mongoose.Schema(
    {
        UserName:{
            type:String,
            required:[true,"Name Should be There"]
        },
        UserEmail:{
            type:String,
            required:[true,"Email Should be There"]
        },
        UserPassword:{
            type:String,
            required:[true,"Name Should be There"]
        }
    }
)

module.exports = mongoose.model("Users",Users_schema);
