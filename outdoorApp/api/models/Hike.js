var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//template for Hikes
const schema = new Schema({
  __id: {type: Number},
  name: { type: String },
  difficulty: {type : Number},
  rating: {type : Number}
});

module.exports = mongoose.model('Hike', schema);
