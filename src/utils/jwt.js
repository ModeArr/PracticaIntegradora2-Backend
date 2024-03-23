const jwt = require("jsonwebtoken");

const JWTSECRET = "claveSecreta";

const generateJWT = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ user }, JWTSECRET, { expiresIn: "60m" }, (err, token) => {
      if (err) {
        console.log(err);
        reject("can not generate jwt token");
      }
      resolve(token);
    });
  });
};

module.exports = {
    generateJWT,
    JWTSECRET,
  }