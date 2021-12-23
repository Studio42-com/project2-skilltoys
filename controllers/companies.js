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
    function dynamicSort(property) {
      var sortOrder = 1;
  
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
  
      return function (a,b) {
          if(sortOrder == -1){
              return b[property].localeCompare(a[property]);
          }else{
              return a[property].localeCompare(b[property]);
          }        
      }
  }
  companies.sort(dynamicSort('company'));


    res.render('skilltoys/companies/new', {
      title: 'Add Company',
      companies
    });
  })
}


