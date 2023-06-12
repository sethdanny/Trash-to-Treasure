const express = require('express');
const router = express.Router();
const {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation
} = require('../controllers/location');

router.post('/createLocation', createLocation);
router.get('/getLocations', getLocations);
router.get('/:id', getLocationById);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);

module.exports = router;
