const Bearing = require('../models/bearing');
const Skilltoy = require('../models/skilltoy');

module.exports = {
  new: newBearing,
  create,
  //addToToy
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


// function addToToy(req, res) {
// //   // first find the movie we are trying to add a cast member to
// //   Skilltoy.findById(req.params.skilltoyId, function(err, skilltoy) {
// //     // then, add the performers ID to the cast array
// //     skilltoy.company.push(req.body.companyId);
// //     // lastly, save the parent document
// //     company.save(function(err) {
// //       if (err) console.log(err);
// //       res.redirect(`/skilltoys/${skilltoy._id}`);
// //     })
// //   });
// }