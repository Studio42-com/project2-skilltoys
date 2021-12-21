const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moddSchema = new Schema({
  mod: {type: String, required: true, unique: true},
}, {
  timestamps: true
});

module.exports = mongoose.model('Mods', modsSchema);