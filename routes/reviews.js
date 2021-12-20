const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// Routes are not prefixed with any path

// POST "/skilltoys/:id/reviews" - Create Review Route
router.post('/skilltoys/:id/reviews', reviewsCtrl.create);

// DELETE "/reviews/:id" - Delete Review Route
router.delete('/reviews/:id', reviewsCtrl.delete);


module.exports = router;