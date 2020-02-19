//README these variables connect the app variable with our express app
var express = require('express');
var router = express.Router();

//README here we state that at the '/' url we are going to render the signIn view
//README the url in full AT THIS POINT (since we already are at /signIn) would now be http://localhost::9000/signIn/, the second '/' specifies this get command below, even without the second '/' it will still render because its technically the index or home page
router.get('/', function(req, res, next){
  res.render('signIn');
});

//README next go to the ../views folder and open signIn.jade
module.exports = router;
