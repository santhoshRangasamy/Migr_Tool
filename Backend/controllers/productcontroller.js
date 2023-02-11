// import axios from "axios";
const Product = require("../models/productModel");

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};
