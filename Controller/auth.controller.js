const { AuthModal } = require("../Model/auth.model");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config()

const getProfile = async (req, res) => {
    const id = req.params.id
    const data = await AuthModal.findOne({ email: id })
    res.send(data)
}
const singUp = async (req, res) => {
    const { email, password, name, username, mobile, description } = req.body;
    const isUser = await AuthModal.findOne({ email })
    if (isUser) {
        res.send({ "msg": "user already exist, Please try logging in" })
    } else {
        bcrypt.hash(password, 7, async function (err, hash) {
            if (err) {
                res.send({ "msg": "something went wrong. please sign up again" })
            } else {
                const user_data = new AuthModal({
                    email: email,
                    password: hash,
                    name: name,
                    username: username,
                    mobile: mobile,
                    description: description
                })
                try {
                    await user_data.save()
                    res.send({ "msg": "signup successfully" })
                }
                catch (err) {
                    res.send({ "msg": "Something went wrong please try again later" })
                }
            }
        });
    }
}
const getLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await AuthModal.findOne({ email })
    const hash = user.password
    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            var token = jwt.sign({ email: email }, process.env.SECRET_KEY);
            res.send({ "msg": "login successfully", "token": token })
        } else {
            res.send({ "msg": "Login failed" })
        }

    });
}
const authOperation = {
    singUp,
    getLogin,
    getProfile
}
module.exports = {
    authOperation
}


// if (!email || !password) {
//     res.send({ "msg": "please filled the required fields" })
// }