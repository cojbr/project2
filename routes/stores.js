const express = require('express');
const router = express.Router();

const storesCtrl = require('../controllers/stores');

router.get('/', storesCtrl.storesIndex);
router.get('/:id', storesCtrl.showStores);
router.put('/update', storesCtrl.updateStores);

module.exports = router;