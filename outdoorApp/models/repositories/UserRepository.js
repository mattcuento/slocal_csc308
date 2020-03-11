var User = require('../User');

class UserRepository {
  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}

module.exports = UserRepository;
