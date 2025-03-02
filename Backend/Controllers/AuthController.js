const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models/UserModel.js");
require("dotenv").config();

module.exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).send("make sure you filled all info");
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).send({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_KEY, { expiresIn: "1h" });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      domain: ".https://dashboard-pka9.onrender.com",
      maxAge: 3600000
    });
 
    res.cookie('userId', newUser._id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      domain: ".https://dashboard-pka9.onrender.com",
      maxAge: 3600000
    });

    res.status(201).json({ message: "User registered successfully", token, userId: newUser._id });

  } catch (err) {
    console.log("Error during signup: ", err.message);
    res.status(500).send("Server error");
  }

}

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(500).send("make sure you filled all info");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: "1h" });

    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 3600000
    });

    res.cookie('userId', user._id.toString(), {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 3600000
    });

    res.json({ token, userId: user._id })
  } catch (err) {
    console.log("Error during login: ", err.message);
    res.status(500).send("Server error");
  }


}
