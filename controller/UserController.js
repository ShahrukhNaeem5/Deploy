const User_Model =require("../model/User_Model");

exports.UsersControl=async(req,res)=>{

    try {
       const {UserName,UserEmail,UserPassword}=req.body;
    
        const newUser=await User_Model.create({
            UserName,
            UserEmail,
            UserPassword
        })
        res.status(200).json({msg:`User Added Succesfully ${newUser}`})
    } catch (error) {
        console.error("Error details:", error.message);
        res.status(500).json({ error: error.message });
        
    }

}