const express = require('express');
const router = express.Router();
const modsCtrl = require('../controllers/mods');
//const isLoggedIn = require('../config/auth'); //no OAuth here for the moment

// Routes are not prefixed with any path

// GET "/companies/new" - New Route
//router.get('/mods/new', modsCtrl.new);


module.exports = router;