const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.verifyToken = async (req, res) => {
  const token = req.cookies.token
  if (!token) return res.json({ status: false });

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {

    if (err) return res.json({ status: false });

    const user = await User.findById(data.id);
    if (user) {
      const sessionExists = user.sessions.some(s => s.sessionId === data.sessionId);
      if (!sessionExists) return res.json({ status: false });
      return res.json({ status: true, user: user.username, email:user.email });
    }
    else return res.json({ status: false })
  }
  )
}

module.exports.verify = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return console.log("error one");

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return console.log("error two");
    const user = await User.findById(data.id);
    if (user) {
      const sessionExists = user.sessions.some(s => s.sessionId === data.sessionId);
      if (!sessionExists) return console.log("error three");
      next();
    }
    else
      console.log("internal server error");
  }
  )
}