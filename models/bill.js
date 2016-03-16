// modules =================================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema ==================================================
var billSchema = new Schema({
  name: { type: String },
  due: {type: Date },
  split: {type: Array },
  amount: {type: String},
  paid: {type: Boolean, default: false},
  notes: {type: String, default: 'none'}
});

module.exports = mongoose.model('Bill', billSchema);
