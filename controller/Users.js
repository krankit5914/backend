const userModel = require("../models/Users");
const { hashPassword } = require("../helper/User");

// users registration controller
RegisterController = async (req, res) => {
  try {
    const { name, email, password, phone_no, address } = req.body;

    // validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone_no) {
      return res.send({ error: "Phone Number is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }

    // check user
    const exisitingUser = await userModel.findOne({
      email: email,
      phone_no: phone_no,
    });
    // exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Allready Register please login",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone_no,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "user Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

// getting users controller
GetUserController = async (req, res) => {
  try {
    const users = await userModel.find({}).sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: users.length,
      message: "User List",
      users,
    });
    console.log(users);
  } catch (error) {
    console.log(`Error in geting users ${error}`);
    res.status(404).send({
      success: false,
      message: "Error in getting users",
      error: error.message,
    });
  }
};

// getting user by id controller
GetUserByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    res.status(200).send({
      success: true,
      message: "User found",
      user,
    });
    console.log(user);
  } catch (error) {
    console.log(`error in fetch user ${error}`);
    res.status(404).send({
      success: false,
      message: "Error in getting user",
      error: error.message,
    });
  }
};

// Delete user by id controller
DeleteUserController = async (req, res) => {
  try {
    const id = req.param._id;
    const user = await userModel.deleteOne(id);
    res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
    });
    console.log(user);
  } catch (error) {
    console.log(`Error in deleting user ${error}`);
    res.status(500).send({
      success: false,
      message: "Error in deleting user",
      error: error.message,
    });
  }
};

// Update user by id controller
UpdateUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      success: true,
      message: "User Updated Successfully",
    });
    console.log(user);
  } catch (error) {
    console.log(`Error in updating user ${error}`);
    res.status(500).send({
      success: false,
      message: "Error in updating user",
      error: error.message,
    });
  }
};

module.exports = {
  RegisterController,
  GetUserController,
  DeleteUserController,
  GetUserByIdController,
  UpdateUserController,
};
