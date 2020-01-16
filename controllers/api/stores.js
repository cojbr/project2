const Stores = require('../models/store');

const indexApiStores = (req, res) => {
    Stores.find({}, (err, inventory) => {
        res.status(200).json(inventory);
    });
};


const showApiStores = function(req, res, next) {
    Stores.findById(req.params.id)
        .then(store => {
            if (store) {
                res.json(store);
            } else {
                res.status(404).json({ error: 'Your store cannot be found. Please try again. EC-controller-store-show-then404' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Error 500. Internal server error. Please contact your webmaster. EC-controller-store-show-catch' });
    });
};


const updateApiStores = function(req, res) {
    Stores.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(store => {
        if (store) {
            res.json(store);
        } else {
            res.status(404).json({ error: 'Store not found. Please try again. EC-controller-store-update' });
        }
    });
};

module.exports = {
    indexApiStores,
    showApiStores,
    updateApiStores,
};
