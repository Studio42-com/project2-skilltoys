const Skilltoy = require('../models/skilltoy');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Movie.findOne({ "reviews._id": req.params.id }).then(function (skilltoy) {
    // Find the review subdoc using the id method on Mongoose arrays
    const review = skilltoy.reviews.id(req.params.id);
    // Ensure that the review was created by the logged in user
    if (!review.user.equals(req.user._id)) return res.redirect(`/skilltoys/${skilltoy._id}`);
    // Remove the review using the remove method of the subdoc
    review.remove();
    // Save the updated movie
    skilltoy.save()
      .then(function () {
        // Redirect back to the movie's show view
        res.redirect(`/skilltoys/${skilltoy._id}`);
      })
      .catch(function (err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/skilltoys/${skilltoy._id}`);
      });
  });
}

function create(req, res) {
  // First find the movie we are adding a review to
  Skilltoy.findById(req.params.id, function(err, skilltoy) {
    // add the user properties to the review being created (req.body)
    req.body.user = req.user._id; //OAuth element
    req.body.userName = req.user.name; //OAuth element
    req.body.userAvatar = req.user.avatar; //OAuth element
    // add the review to the skilltoy.reviews array
    skilltoy.reviews.push(req.body);
    // we need to save the parent document
    skilltoy.save(function(err) {
      // handle errors first
      if (err) console.log(err);
      // console.log the movie to check review was created
      console.log(skilltoy);
      // then, respond with a redirect
      res.redirect(`/skilltoys/${skilltoy._id}`);
    });
  });
}