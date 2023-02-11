const express = require("express");
const app = express();

app.use(express.json());
const products = require("./routes/product");
app.use("/api/v1/", products);

const requests = require("./routes/request");
app.use("/api/v1/", requests);

module.exports = app;
