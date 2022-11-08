const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    mobile: { type: Number, required: true },
    description: { type: String },
    role: { type: String, enum: ["Admin", "User"], default: "User" }
})
const AuthModal = mongoose.model("usersign", authSchema);

module.exports = {
    AuthModal
}

// {
//     "email":"nihal@gmail.com",
//     "password":"nihal@123"
// }