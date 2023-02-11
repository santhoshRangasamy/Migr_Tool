const express = require("express");
const {
  newRequest,
  getProducts,
  updateRequest,
} = require("../controllers/requestcontroller");
const router = express.Router();
router.route("/requests").get(getProducts);
router.route("/request/new").post(newRequest);
router.route("/request/update").put(updateRequest);
module.exports = router;
