const { use } = require("passport");
const User = require("../models/UserModel")
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username} = req.body;

     if (!email||!password||!username){
      return res.json({message:"All fields are required"});
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
   
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await User.create({ email, password:hashedPassword, username});

    //// updated for session 
    const sessionId = crypto.randomUUID();
    user.sessions.push({sessionId});
    await user.save() 

    const token = createSecretToken(user._id,sessionId);  //// updated for session 

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      // secure: true,       
      // sameSite: "strict", 
      maxAge: 2 *24 * 60 * 60 * 1000
    });
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user: user.username
    });
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }

    const user = await User.findOne({ email });
    if (!user) {  
      return res.json({ message: 'Incorrect  email' })
    }

    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password' })
    }
    
    const sessionId = crypto.randomUUID();  //// updated for session 
    user.sessions.push({sessionId});
    await user.save()
    
    const token = createSecretToken(user._id, sessionId); 

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
    next()
  } catch (error) {
    console.error(error);
  }
}