const userModel = require("../models/Users");

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

    const user = await new userModel({
      name,
      email,
      password,
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

module.exports = { RegisterController };
