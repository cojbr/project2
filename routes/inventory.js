var express = require('express');
var router = express.Router();

const inventoryCtrl = require('../controllers/inventory');

router.get('/', inventoryCtrl.inventoryIndex);
router.post('/', inventoryCtrl.createItem);
router.get('/:id', inventoryCtrl.showItem);
router.put('/:id', inventoryCtrl.updateItem);
router.delete('/:id', inventoryCtrl.deleteItem);

module.exports = router;


