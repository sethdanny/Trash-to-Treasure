const express = require('express');
const router = express.Router();
const {
  createWasteType,
  getWasteTypes,
  getWasteTypeById,
  updateWasteType,
  deleteWasteType
} = require('../controllers/wasteType');

// Routes to handle waste types
router.get('/getWasteTypes', getWasteTypes);
router.get('/:id', getWasteTypeById);
router.post('/createWasteType', createWasteType);
router.put('/:id', updateWasteType);
router.delete('/:id', deleteWasteType);

module.exports = router;
