const { AuthModal } = require("../Model/auth.model");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config()


const singUp = async (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 7, async function (err, hash) {
        if (err) {
            res.send("something went wrong. please sign up again")
        }
        if (!email || !password) {
            res.send("please filled the required fields")
        }
        const user_data = new AuthModal({
            email: email,
            password: hash
        })
        await user_data.save()
        res.send("signup successfully")
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
            res.send("Login failed")
        }

    });


}
const authOperation = {
    singUp,
    getLogin,
}
module.exports = {
    authOperation
}
