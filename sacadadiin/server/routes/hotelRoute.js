const express = require('express');
const router = express.Router();

const hotelController = require ('../Controllers/hotelController');


router.get('/all',hotelController.getAll)

module.exports = router;