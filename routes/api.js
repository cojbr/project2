var express = require('express');
var router = express.Router();
const inventoryApiCtrl = require('../controllers/api/inventory');
const storesApiCtrl = require('../controllers/api/stores')

router.get('/api', inventoryApiCtrl.inventoryIndex);
router.post('/inventory/api', inventoryApiCtrl.createItem);
router.get('/inventory/api/:id', inventoryApiCtrl.showItem);
router.put('/inventory/api/:id', inventoryApiCtrl.updateItem);
router.delete('/inventory/api/:id', inventoryApiCtrl.deleteItem);

router.get('/stores/api', storesApiCtrl.storesIndex);
router.get('stores/api/:id', storesApiCtrl.showStores);
router.put('stores/api:id', storesApiCtrl.updateStores);

module.exports = {
    indexApiInventory,
    showApiInventory,
    createApiInventory,
    updateApiInventory,
    delete: deleteApiInventory
};

module.exports = {
    indexApiStores,
    showApiStores,
    updateApiStores,
};