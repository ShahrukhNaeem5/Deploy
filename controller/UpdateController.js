// Ensure this is how you are exporting the function
const User_Model = require('../model/User_Model');

const UpdateControllers=async(req,res)=>{
    try {
        const { id } = req.params; // Get the ID from request params
        const updateData = req.body; // Use req.body for update data

       

        const updatedUser = await User_Model.findByIdAndUpdate(
            id,
            updateData,
            { new: true } // Return the updated document
        );


        
        return res.status(200).json({msg:"Update Succefuly",data:updatedUser})


        
        } catch (error) {
        res.status(404).json({msg:"There is an error in Update Controller"});
        
    }
}




module.exports = UpdateControllers;
