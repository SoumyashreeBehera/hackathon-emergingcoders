const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phnNo: { type: Number, required: true },
    address: {
      at: { type: String, required: true },
      pin: { type: Number, required: true },
      dist: { type: String, required: true },
      state: { type: String, required: true },
    },
    deliveryStatus: { type: Boolean, default: false },
    warehouseStatus: { type: Boolean, default: false },
    onwayStatus: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
