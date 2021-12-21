const Company = require('../models/company');
const Skilltoy = require('../models/skilltoy');

module.exports = {
  new: newCompany,
  create,
  //addToToy
};

function create(req, res) {
  Company.create(req.body, function (err, company) {
    res.redirect('/companies/new');
  });
}

function newCompany(req, res) {
  Company.find({}, function (err, companies) {
    res.render('skilltoys/companies/new', {
      title: 'Add Company',
      companies
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