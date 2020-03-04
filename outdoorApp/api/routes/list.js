var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  hikes = {};
  hikes['1'] = {name: "Bishop's Peak", difficulty: "3", location: "Bishop's", rate: "5"};
  hikes['2'] = {name: "Madonna", difficulty: "2", location: "Madonna Mountain", rate: "4"}
  res.json(hikes);
});

module.exports = router;
