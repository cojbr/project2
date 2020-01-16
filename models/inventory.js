var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema (
    {
        description: String,
        price: Number,
        type: String,
        colour: String,
        sold: Boolean,
        imgURL: String,
        storeNumber: Number,
    }
);

/////////// used to populate database with initial data.
// const Item = mongoose.model("Item", itemSchema);

// const item = new Item ({
//     description: "Herman Miller Arm Shell",
//     price: 550,
//     type: "Chair",
//     colour: "Yellow",
//     sold: true
//     imgURL: "https://i.imgur.com/XhzuLce.png"
//     storeNumber: 001,
// });

// item.save();
// mongoose.connection.close();

module.exports = mongoose.model('InventoryModel', itemSchema);