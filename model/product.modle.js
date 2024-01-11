const mongoose = require('mongoose')
// create SCHEMA
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  });

// create PRODUCTS
// - COLLECTION
// - MODEL
const Product = mongoose.model("Product", productSchema, "products")

module.exports = Product