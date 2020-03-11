var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const schema = new Schema({
  __id: {type: Number},
  email: { type: String },
  username: {type : String}
});

module.exports = mongoose.model('User', schema);
