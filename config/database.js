const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/product-managenent2");
    console.log("connected");
  } catch (error) {
    console.log("connected false");
  }
};
