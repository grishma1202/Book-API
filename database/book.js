const mongoose = require("mongoose");

//creating a schema or a book schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    authors: [Number],
    language: String,
    pubDate: String,
    numOfPage: Number,
    category: [String],
    publication: Number,
});

//create a book model
const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;