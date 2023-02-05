const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    phone: Number,
    password: String,
    roles: {
        type: String, 
        enum: ["user", "moderator", "admin"],
        default: "user"
    },
    date: {type: Date, default: Date.now}
})


module.exports = mongoose.model("User", userSchema)