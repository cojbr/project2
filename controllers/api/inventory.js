const Inventory = require('../models/inventory');

const indexApiInventory = (req, res) => {
    Inventory.find({}, (err, inventory) => {
        res.status(200).json(inventory);
    });
};


const showApiInventory = function(req, res, next) {
    Inventory.findById(req.params.id)
        .then(Inventory => {
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ error: 'Your item cannot be found. Please try again. EC-controller-inventory-show-then404' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Error 500. Internal server error. Please contact your webmaster. EC-controller-inventory-show-catch' });
    });
};

const createApiInventory = (req, res) => {
    Inventory.create(req.body)
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(500).json({ error: 'An error has occurred. Please contact your webmaster. EC-controller-inventory-create'});
    });
};

const updateApiInventory = function(req, res) {
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(item => {
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item not found. Please try again. EC-controller-inventory-update' });
        }
    });
};

const deleteApiInventory = function(req, res) {
    Inventory.findByIdAndDelete(req.params.id).then(removedItem => {
        res.json({ removedItem });
    });
};

module.exports = {
    indexApiInventory,
    showApiInventory,
    createApiInventory,
    updateApiInventory,
    delete: deleteApiInventory
};
