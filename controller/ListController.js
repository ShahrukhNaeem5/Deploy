const User_Model =require("../model/User_Model");


exports.UserList=async(req,res)=>{
    try {
        const UserList=await User_Model.find();
        
            res.status(200).json({UserList})
        
    } catch (error) {
        res.status(400).json({msg:"List Fetching Error"})
        console.log("Error")
        
    }
}