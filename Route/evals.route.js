const { Router } = require("express");
const { evalsOperation } = require("../Controller/evals.controller");
const evalsRoute = Router();

evalsRoute.get("/", evalsOperation.getData)
evalsRoute.get("/:id", evalsOperation.getDatabyId)
evalsRoute.delete("/:id", evalsOperation.deleteData)
evalsRoute.post("/add", evalsOperation.postData)
evalsRoute.put("/:id", evalsOperation.updateData)


module.exports = {
    evalsRoute
}