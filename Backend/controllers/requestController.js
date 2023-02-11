const Request = require("../models/requestModel");
exports.getProducts = async (req, res, next) => {
  const requests = await Request.find();
  res.status(200).json({ success: true, requests });
};

exports.newRequest = async (req, res, next) => {
  const request = await Request.create(req.body);
  res.status(201).json({
    request,
  });
};

exports.updateRequest = async (req, res, next) => {
  const request = await Request.updateOne(
    { _id: req.body.id, "RequestInputs.RefId": req.body.RefId },
    { $set: { "RequestInputs.$.ResponseCode": "200" } }
  );

  res.status(200).json({
    success: true,
    request,
  });
};
