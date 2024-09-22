const express = require("express");

const {
  RegisterController,
  GetUserController,
  DeleteUserController,
  GetUserByIdController,
  UpdateUserController,
} = require("../controller/Users");

// router Object
const router = express.Router();

// routing
// Register || Method post
router.post("/register", RegisterController);

// getiing users || method get
router.get("/getusers", GetUserController);

// getting user by id || method get
router.get("/getuser/:id", GetUserByIdController);

//deleting users || method delete
router.delete("/deleteuser/:id", DeleteUserController);

// Updating user by id || method put
router.put("/updateuser/:id", UpdateUserController);

module.exports = router;
