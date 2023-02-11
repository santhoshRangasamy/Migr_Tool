
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter Name"],
      trim: true,
      maxlength: [100, "Product name 100 Char"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter Price"],
      default: 0.0,
    },
  })

let schema = mongoose.model('Product', productSchema)

module.exports = schema