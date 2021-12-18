//const Skilltoy = require("../models/skilltoy");

module.exports = {
  index  
};

function index(req, res) {
    res.render("skilltoys/index",{ title: "Skill Toys Index"})
};
