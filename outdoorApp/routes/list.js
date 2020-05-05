var express = require('express');
var router = express.Router();
var hike_controller = require('../controllers/HikeController');


//get all hikes
router.get('/', hike_controller.get_hikes); 

//creating new hike
router.post('/', hike_controller.create_hike);

module.exports = router;
