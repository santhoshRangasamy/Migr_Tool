const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "Please Enter User Name"],
    trim: true,
    maxlength: [100, "Product name 100 Char"],
  },
  Account: {
    type: String,
    required: [true, "Please Enter Account Name"],
  },
  Platform: {
    type: String,
    required: [true, "Please Enter Platform Name"],
  },
  Parameter: {
    type: String,
    required: [true, "Please Enter parameter Name"],
  },
  RequestInputs: {
    type: Array,
    required: [true, "Please Enter feeds Name"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// const requestSchema = new mongoose.Schema({
//   requestInputs: {
//     type: Array,
//   },
//   name: {
//     type: String,
//   },
// });

let schema = mongoose.model("Request", requestSchema);

module.exports = schema;
