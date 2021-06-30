const mongoose = require("mongoose");

//Author Schema
const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String],
});

const PublicationModel = mongoose.model(PublicationSchema);

module.exports = PublicationModel;