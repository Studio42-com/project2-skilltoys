const express = require('express');
const router = express.Router();
const companiesCtrl = require('../controllers/companies');
//const isLoggedIn = require('../config/auth'); //no OAuth here for the moment

// Routes are not prefixed with any path

// GET "/companies/new" - New Route
router.get('/companies/new', companiesCtrl.new);

// POST "/companies" - Create Route
router.post('/companies', companiesCtrl.create);

// POST "/skilltoys/:skilltoyId/companies" - Add to skill toy
// router.post('/skilltoys/:skilltoyId/companies', companiesCtrl.addToToy); //this line works.

module.exports = router;