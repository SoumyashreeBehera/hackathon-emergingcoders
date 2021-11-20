const Product = require("../models/product.model");
const authorize = (givenRoles) => {
  return function (req, res, next) {
    const user = req.user;
    const isPermittedArray = user.roles.filter((role) =>
      givenRoles.includes(role)
    );
    if (isPermittedArray.length == 0)
      return res.status(401).send("ypu are not permitted");
    return next();
  };
};

module.exports = { authorize };
