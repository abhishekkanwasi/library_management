const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWTSECRET;
module.exports = authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        return res.sendStatus(403);
      }
      if (!payload) {
        return res.sendStatus(403);
      }
      req.user = payload;
      console.log(req.user);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
