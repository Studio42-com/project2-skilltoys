const Company = require('../models/company');
const Skilltoy = require('../models/skilltoy');

module.exports = {
  new: newCompany,
  create,
};

function create(req, res) {
  Company.create(req.body, function (err, company) {
    res.redirect('/companies/new');
  });
}

function newCompany(req, res) {
  Company.find({}, function (err, companies) {
    // Company.find({}, function (err, companies).sort({company:'asc'}) {
    res.render('skilltoys/companies/new', {
      title: 'Add Company',
      companies
    });
  })
}

