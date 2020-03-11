var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/UserController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('NEW ACCOUNT');
});

router.post('/:username/:email', user_controller.create_user);

module.exports = router;

