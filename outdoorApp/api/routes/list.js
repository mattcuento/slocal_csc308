var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//importing controller
var hike_controller = require('../controllers/HikeController');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:<slo>@cluster0-2k9tb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//connection to DB
client.connect(err => {
  const db = client.db("slo_explore");
  // perform actions on the collection object
  client.close();
});

//alternative, connection to DB through mongoose;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => function() {
  console.error.bind(console, 'MongoDB connection error: ');
});

var db = mongoose.connection;

//sending hardcoded test data for list
router.get('/', function(req, res, next) {
  hikes = {};
  hikes['1'] = {name: "Bishop's Peak", diff: "3", loc: "Bishop's", rate: "5"};
  hikes['2'] = {name: "Madonna", diff: "2", loc: "Madonna Mountain", rate: "4"}
  res.json(hikes);
});

//creating new hike
router.post('/', hike_controller.create_hike);

module.exports = router;
