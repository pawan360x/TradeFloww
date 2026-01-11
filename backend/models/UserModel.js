

const { userSchema } = require("../schemas/UserSchema");
const { model } = require("mongoose");

const User = new model("User", userSchema);

module.exports = User;