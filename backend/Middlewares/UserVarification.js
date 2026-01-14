
// // dashboard needs token check and its avail by login signup 
//// this code relate to dashboard -> home.js 

const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.UserVerification = async (req, res) => {
  const token = req.cookies.token
  if (!token) return res.json({ status: false });

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {

    if (err) return res.json({ status: false });
    
    const user = await User.findById(data.id)
    if (user) {
      const sessionExists = user.sessions.some(s => s.sessionId === data.sessionId);  //// updated for session 
      if (!sessionExists) return res.json({ status: false });
      return res.json({ status: true, user: user.username });
    }
    else return res.json({ status: false })
  }
  )
}