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
    bcrypt.hash(password, 7, async function (err, hash) {
        if (err) {
            res.send({ "msg": "something went wrong. please sign up again" })
        }
        if (!email || !password) {
            res.send({ "msg": "please filled the required fields" })
        }
        const user_data = new AuthModal({
            email: email,
            password: hash,
            name: name,
            username: username,
            mobile: mobile,
            description: description
        })
        await user_data.save()
        res.send({ "msg": "signup successfully" })
    });
}
const getLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await AuthModal.findOne({ email })
    const hash = user.password
    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            var token = jwt.sign({ email: email }, process.env.SECRET_KEY);
            res.send({ "message": "login successfully", "token": token })
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
