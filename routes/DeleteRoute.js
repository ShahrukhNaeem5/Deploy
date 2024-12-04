const express = require('express');
const router = express.Router();
const { DeleteUser } = require('../controller/DeleteController');

// DELETE request for deleting a user by ID
router.delete('/delete/:id', DeleteUser);

module.exports = router;