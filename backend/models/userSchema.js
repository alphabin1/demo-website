const mongoose = require("mongoose");
const Order = require("./orderSchema");
const Address = require("./addressSchema");

const addressSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  street: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Address,
    },
  ],

  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Order,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
