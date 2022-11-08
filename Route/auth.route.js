const { Router } = require("express");
const { authOperation } = require("../Controller/auth.controller");

const authRoute = Router();

authRoute.post("/signup", authOperation.singUp)
authRoute.post("/login", authOperation.getLogin)
authRoute.get("/:id", authOperation.getProfile)
module.exports = {
    authRoute
}