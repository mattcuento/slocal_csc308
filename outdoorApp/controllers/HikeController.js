//import template for Hikes
var Hike = require('../models/Hike');

var HikeRepository = require('../models/repositories/HikeRepository');
//constructor
exports.create_hike = function(req, res) {
  const hike = req.body;

  HikeRepository.create(hike)
    .then((newHike) => {
      res.json(newHike);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    });
}

