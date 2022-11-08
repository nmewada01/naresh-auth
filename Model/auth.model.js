const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})
const AuthModal = mongoose.model("sign", authSchema);

module.exports = {
    AuthModal
}

// {
//     "email":"nihal@gmail.com",
//     "password":"nihal@123"
// }