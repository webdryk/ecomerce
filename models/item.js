const mongoose = require("mongoose");
// Item Schema
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    description: String,
    image: String
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;