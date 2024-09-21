const express = require('express')

const {RegisterController} =require('../controller/Users')

// router Object
const router = express.Router();

// routing
// Register || Method post
router.post("/register",RegisterController)


module.exports=router;