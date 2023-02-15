const Request = require("../models/requestModel");
exports.getProducts = async (req, res, next) => {
  const requests = await Request.find();
  res.status(200).json({ success: true, requests });
};

exports.newRequest = async (req, res, next) => {
  const request = await Request.create(req.body);
  res.status(201).json({
    success: true,
    request,
  });
};

exports.updateRequest = async (req, res, next) => {
  console.log(req.body.refId);
  const request = await Request.updateOne(
    { _id: req.body.id, "RequestInputs.RefId": req.body.refId },
    {
      $set: {
        "RequestInputs.$.ResponseCode": "200",
        "RequestInputs.$.ResponseStatus": req.body.status,
      },
    }
  );

  res.status(200).json({
    success: true,
    request,
  });
};
