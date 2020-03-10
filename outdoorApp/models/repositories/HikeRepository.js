//defining construction of a Hike
var Hike = require('../Hike');

class HikeRepository {
  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}

module.exports = HikeRepository;
