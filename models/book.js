const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        required: false
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;