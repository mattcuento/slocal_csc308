var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  hikes = {};
  hikes['1'] = {name: "Bishop's Peak", diff: "3", loc: "Bishop's", rate: "5"};
  hikes['2'] = {name: "Madonna", diff: "2", loc: "Madonna Mountain", rate: "4"}
  res.json(hikes);
});

module.exports = router;
