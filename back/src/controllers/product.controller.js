const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const authenticate = require("../middlewares/authenticate");
const { authorize } = require("../middlewares/authorize");

router.get(
  "",
  authenticate,
  authorize(["admin", "conveyer"]),
  async (req, res) => {
    try {
      const product = await Product.find({
        warehouseStatus: false,
        deliveryStatus: false,
      })
        .lean()
        .exec();
      return res.status(200).json({ data: product });
    } catch (err) {
      return res.status(401).send("you are not allowed to visit this page");
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).json({ data: product });
  } catch (err) {
    return res.status(401).send("error occured");
  }
});

router.post("", authenticate, authorize(["admin"]), async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({ data: product });
  } catch (err) {
    return res.status(401).send("you are not allowed to do this action");
  }
});

router.patch("/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).json({ data: product });
  } catch (err) {
    return res.status(401).send("you are not allowed to do this action");
  }
});

module.exports = router;
