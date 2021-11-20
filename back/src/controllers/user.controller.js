const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY || "som");
};

const register = async (req, res) => {
  try {
    //check if any user with that email exist or not if yes then throw an error
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user)
      return res
        .status(401)
        .json({ status: "failed", message: "user already exists" });

    //else create an user and hash the password
    user = await User.create(req.body);

    //create a token
    const token = newToken(user);
    //then return the token and userdata to the frontend
    return res.status(201).json({ user, token });
  } catch (err) {
    return res
      .status(401)
      .json({ status: "failed", message: "invalid username or password" });
  }
};

const login = async (req, res) => {
  try {
    //check if any user with that email exist or not if not exist then throw an error
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user)
      return res
        .status(401)
        .json({ status: "failed", message: "user does not exist" });

    //else match the password'
    const match = user.checkPassword(req.body.password);

    //if password dont match then throw an error
    if (!match)
      return res
        .status(401)
        .json({ status: "failed", message: "invalid password" });

    //if matched then create a token
    const token = newToken(user);
    //then return the token and userdata to the frontend
    return res.status(201).json({ user, token });
  } catch (err) {
    return res
      .status(401)
      .json({ status: "failed", message: "invalid username or password" });
  }
};

const getEveryOne = async (req, res) => {
  try {
    let user = await User.find().lean().exec();
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = { register, login, newToken, getEveryOne };
