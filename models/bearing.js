const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bearingSchema = new Schema({
  // bearingType: {type: String, required: true, unique: true},
  bearing: {type: String, required: true, unique: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Bearing', bearingSchema);