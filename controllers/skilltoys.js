const Skilltoy = require("../models/skilltoy");
const Company = require("../models/company");
const Bearing = require("../models/bearing");


module.exports = {
  index,
  show,
  create,
  new: newSkilltoy
};

async function index(req, res) {

        const skilltoys = await Skilltoy.find({}).populate('company').exec();
    res.render("skilltoys/index", { title: "Skill Toys Index", skilltoys});

}
async function newSkilltoy(req, res) {
  const skilltoy = await Skilltoy.find();
  const companies = await Company.find({}).sort({company:'asc'});
  const bearings = await Bearing.find({});
  res.render("skilltoys/new", { title: "Add Skilltoy", skilltoy, companies, bearings});
}
function create(req, res) {

  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const skilltoy = new Skilltoy(req.body);
  skilltoy.save(function (err) {

    if (err) {
      console.log(err);
      return res.redirect("/skilltoys/new");
    }
    console.log(skilltoy);
    res.redirect(`/skilltoys/${skilltoy._id}`);
  });
}

function show(req, res) {

    Skilltoy.findById(req.params.id).exec(function (err, skilltoy) { 
        Company.findById(skilltoy.company).exec(function(err, company){
          Bearing.findById(skilltoy.bearing).exec(function(err, bearing){
          res.render("skilltoys/show", { title: "YoYo Detail", skilltoy, company, bearing }); 
        })
      });
    }); 
}