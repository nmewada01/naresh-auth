var jwt = require('jsonwebtoken');
const { EvalsModal } = require('../Model/evals.model');
require("dotenv").config()
const getData = async (req, res) => {
   // const token = req.headers.authorization.split(" ")[1]
    try {
        //const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const data = await EvalsModal.find()
        res.send(data)
    }
    catch (err) {
        console.log(err)
        res.send("Please Login")
    }
}

const postData = async (req, res) => {
     // const token = req.headers.authorization.split(" ")[1]
    try {
         //const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const payload = req.body;
        const data = await EvalsModal.insertMany([payload])
        res.send("success")
    }
    catch (err) {
        console.log(err)
        res.send("Please Login")
    }
}
const getDatabyId = async (req, res) => {
     // const token = req.headers.authorization.split(" ")[1]
    try {
         //const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const data = await EvalsModal.findOne({ _id: req.params.id })
        res.send(data)
    }
    catch {
        console.log(err)
        res.send("error")
    }
}
const deleteData = async (req, res) => {
     // const token = req.headers.authorization.split(" ")[1]
    try {
         //const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const query = req.params.id
        await EvalsModal.deleteOne({ _id: query })
        res.send("deleted")
    }
    catch (err) {
        console.log(err)
        res.send("error")
    }
}
const updateData = async (req, res) => {
     // const token = req.headers.authorization.split(" ")[1]
    try {
         //const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const query = req.params.id
        await EvalsModal.updateOne({ _id: query }, { $set: req.body })
        res.send("update successfully")
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}
const evalsOperation = {
    getData,
    postData,
    deleteData,
    getDatabyId,
    updateData
}
module.exports = {
    evalsOperation
}