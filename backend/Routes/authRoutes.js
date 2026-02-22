const { Signup,Login,Logout } = require("../Controllers/authController");
const { verifyToken } = require("../Middlewares/verifyToken");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/verify", verifyToken);

module.exports = router;