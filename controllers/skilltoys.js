const Skilltoy = require("../models/skilltoy");

// const skilltoy = require("../models/skilltoy");

module.exports = {
  index,
  // show,
  create,
  new: newSkilltoy
};

function index(req, res) {
    Skilltoy.find({}, function (err, skilltoys) {
    res.render("skilltoys/index", { title: "Skill Toys Index", skilltoys});
});
}
function newSkilltoy(req, res) {
  res.render("skilltoys/new", { title: "Add Skilltoy" });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // delete any empty properties from req.body
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const skilltoy = new Skilltoy(req.body);
  movie.save(function (err) {
    // one way to handle errors
    if (err) {
      console.log(err);
      return res.redirect("/skilltoys/new");
    }
    console.log(skilltoy);
    res.redirect(`/skilltoys/${skilltoy._id}`);
  });
}