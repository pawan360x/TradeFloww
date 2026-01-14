
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id, sessionId) => { //// updated for session sessionid 
  return jwt.sign(
    { id, sessionId },
    process.env.TOKEN_KEY,
    { expiresIn: "2d", }
  );
};