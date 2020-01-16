const InventoryModel = require('../models/inventory');
const StoreModel = require('../models/store');

const inventoryIndex = (req, res) => {
    InventoryModel.find({}, function(err, items) {
        console.log(items);
        res.render('inventory/index', { titleInventoryEjs: "antiquest - All Inventory", items });
    });
};

const showItem = function(req, res) {
    InventoryModel.findById(req.params.id)
    res.render('/', {})
};

const createItem = function(req, res) {
    res.render('/', {})
};

const updateItem = function(req, res) {
    res.render('/', {})
};

const deleteItem = function(req, res) {
    res.render('/', {})
};

module.exports = {
    inventoryIndex,
    showItem,
    updateItem,
    createItem,
    deleteItem,
};

