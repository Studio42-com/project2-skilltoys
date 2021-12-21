const Bearing = require('../models/bearing');
const Skilltoy = require('../models/skilltoy');

module.exports = {
  new: newBearing,
  create,

};

function create(req, res) {
  Bearing.create(req.body, function (err, bearing) {
    res.redirect('/bearings/new');
  });
}

function newBearing(req, res) {
  Bearing.find({}, function (err, bearings) {
    res.render('skilltoys/bearings/new', {
      title: 'Add Bearing',
      bearings
    });
  })
}

