const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  phone_no: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  address: {
    type: String,
    require: true,
  },
  role: {
    type: Number,
    default: 0,
  },
});

module.exports =mongoose.model('Users',userSchema)
