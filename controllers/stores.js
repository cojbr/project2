const StoreModel = require('../models/store');

const storesIndex = (req, res) => {
    StoreModel.find({}, function(err, stores) {
        console.log(stores);
        res.render('stores/index', { titleStoreEjs: "antiquest - All Inventory", stores });
})};

const showStores = function(req, res, next) {
    res.render('/', {})
};

const updateStores = function(req, res, next) {
    res.render('/', {
    })
};

module.exports = {
    storesIndex,
    showStores,
    updateStores,
};