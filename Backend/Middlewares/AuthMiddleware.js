const { User } = require("../models/UserModel");
require("dotenv").config();

module.exports.userVerification = async(req, res) => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    return res.json({ status: false })
  }
    if (err) {
      return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
}