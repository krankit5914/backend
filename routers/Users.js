const express = require("express");

const {
  RegisterController,
  GetUserController,
  DeleteUserController,
  getUserByIdController
} = require("../controller/Users");

// router Object
const router = express.Router();

// routing
// Register || Method post
router.post("/register", RegisterController);

// getiing users || method get
router.get("/getusers", GetUserController);

// getting user by id || method get
router.get("/getuser/:id", getUserByIdController);

//deleting users || method delete
router.delete("/deleteuser/:id", DeleteUserController);

module.exports = router;
