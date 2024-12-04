const ListController =require('../controller/ListController');
const express =require("express");
const router= express.Router()

router.route('/list').get(ListController.UserList);

module.exports=router;