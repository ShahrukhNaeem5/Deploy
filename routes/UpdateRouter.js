const express = require('express');
const router = express.Router();
const UpdateController = require('../controller/UpdateController');

router.put('/updatelist/update/:id', UpdateController);

module.exports = router;
