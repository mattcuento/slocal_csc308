var UserRepository = require('../models/repositories/UserRepository');

exports.create_user= function(req, res) {
  const user = req.body;

  UserRepository.create(user)
    .then((newUser) => {
      res.json(newUser);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    });
}

