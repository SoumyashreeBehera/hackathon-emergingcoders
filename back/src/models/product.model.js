const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phnNo: { type: Number, required: true },
    address: {
      at: { type: String, required: true },
      post: { type: String, required: true },
      pin: { type: Number, required: true },
      houseNo: { type: Number, required: true },
      landMark: { type: String, required: true },
      dist: { type: String, required: true },
      state: { type: String, required: true },
    },
    status: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
