const express = require('express');
const router = express.Router();
const companiesCtrl = require('../controllers/companies');

// Routes are not prefixed with any path

// GET "/companies/new" - New Route
router.get('/companies/new', companiesCtrl.new);

// POST "/performers" - Create Route
router.post('/companies', companiesCtrl.create);

// POST "/skilltoys/:sklltoyId/companies" - Add to skill toy
// router.post('/skilltoys/:skilltoyId/companies', companiesCtrl.addToToy); //this line works.
router.post('/skilltoys/:skilltoyId/companies', companiesCtrl.addToToy);
module.exports = router;