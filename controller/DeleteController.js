const User_Model= require('../model/User_Model');


exports.DeleteUser=async(req,res)=>{

    try {
        const {id}=req.params;
        const DeleteData=await User_Model.findByIdAndDelete(id)
        res.status(200).json({msg:"Delete succesfuully",data:DeleteData});
    } catch (error) {
        console.log("Deleted Error");
    }
}