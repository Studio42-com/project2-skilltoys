const Skilltoy = require("../models/skilltoy");
const Company = require("../models/company");
const Edit = require("../models/edit");

module.exports = {
  index,
  show,
  create,
  new: newSkilltoy
};

function index(req, res) {
    Skilltoy.find({}, function (err, skilltoys) {
    res.render("skilltoys/index", { title: "Skill Toys Index", skilltoys});
});
}
async function newSkilltoy(req, res) {
  const skilltoy = await Skilltoy.find();
  const companies = await Company.find({});

  res.render("skilltoys/new", { title: "Add Skilltoy", skilltoy, companies});
}
function create(req, res) {

  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const skilltoy = new Skilltoy(req.body);
  skilltoy.save(function (err) {
    // one way to handle errors
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
          res.render("skilltoys/show", { title: "YoYo Detail", skilltoy, company }); 
        })
    }); 
}