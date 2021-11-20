const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get(
  "",
  async (req, res) => {
    try {
      const product = await Product.find().lean().exec();
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

router.post("", 
async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({ data: product });
  } catch (err) {
    return res.status(401).send("you are not allowed to do this action");
  }
});
module.exports = router;
