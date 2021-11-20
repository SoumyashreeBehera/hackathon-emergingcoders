const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const productController = require("./controllers/product.controller");
const {
  register,
  login,
  getEveryOne,
} = require("./controllers/user.controller");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/product", productController);

app.post("/register", register);
app.post("/login", login);
app.get("/login", getEveryOne);

app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});
