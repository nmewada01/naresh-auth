const express = require("express");
const { connection } = require("./Config/evals.db");
const { authRoute } = require("./Route/auth.route");
const { evalsRoute } = require("./Route/evals.route");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 7070;
app.use(express.json())
const cors = require("cors")
app.use(cors())
app.use("/user", evalsRoute);
app.use("/auth", authRoute)

app.listen(port, async () => {
    try {
        await connection,
            console.log("database connected")
    }
    catch (err) {
        console.log("error in database connecting")
        console.log(err)
    }
    console.log("server is listening on " + port)
})