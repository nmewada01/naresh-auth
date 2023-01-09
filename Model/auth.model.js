const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    mobile: { type: Number, required: true },
    description: { type: String },
    role: { type: String, enum: ["Admin", "User"], default: "Admin" }
})
const AuthModal = mongoose.model("usersign", authSchema);

module.exports = {
    AuthModal
}

// {
//     "email":"nihal@gmail.com",
//     "password":"nihal@123"
// }

// {
//     "name":"Naresh Rajput",
//     "email":"nareshmewada014@gmail.com",
//     "password":"naresh#111*",
//     "username":"naresh11",
//     "mobile":9617732664,
//     "description":"https://media.licdn.com/dms/image/C4E03AQGInoSocySBIg/profile-displayphoto-shrink_100_100/0/1646467268654?e=1678924800&v=beta&t=aPV9jbcnI4B6q7c6XeTJjtvexkBSvmXBenm-LAddzm0"
// }