
const mongoose = require("mongoose");


const SessionSchema = new mongoose.Schema({
    sessionId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 2 * 24 * 60 * 60 },
})

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    sessions: [SessionSchema],          //// updated for session
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });


const User = mongoose.model("User", userSchema);

module.exports = User;