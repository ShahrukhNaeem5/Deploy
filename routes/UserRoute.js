const express=require("express");
const router=express.Router()
const UserController=require("../controller/UserController");


router.route('/').post(UserController.UsersControl);

module.exports=router;

