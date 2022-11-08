const mongoose = require("mongoose")

const evalsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    notes: { type: String, required: true },
    tags: { type: String, required: true }
})
const EvalsModal = mongoose.model("user", evalsSchema)

module.exports = {
    EvalsModal
}

// {
//     "title":"Full Stack Developer",
//     "notes":"So in this evaluation we need to build an API for an app......",
//     "tags":"Evaluation"
// }

