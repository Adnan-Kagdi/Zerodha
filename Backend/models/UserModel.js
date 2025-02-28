const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username address is required"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "Your email is required"],
    },

    password: {
        type: String,
        required: [true, "Your password is required"],
    },

    createdAt: {
        type: Date,
        default: new Date()
    }

})

const User = mongoose.model("User", userSchema);

module.exports = { User }