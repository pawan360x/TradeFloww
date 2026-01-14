const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.Logout = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(204).send();

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);

    await User.findByIdAndUpdate(data.id, {
      $pull: { sessions: { sessionId: data.sessionId } }
    });

    res.clearCookie("token", { httpOnly: true });
    return res.json({ success: true , message:"Logout successfully!" });
  } catch (err) {
    // console.error(err);
    console.log(err);
    res.clearCookie("token", { httpOnly: true });
    return res.json({ success: false });
  }
};
