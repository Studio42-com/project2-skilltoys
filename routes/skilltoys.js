const express = require('express');
const router = express.Router();
const skilltoysCtrl = require('../controllers/skilltoys');
const isLoggedIn = require('../config/auth'); //must use when using OAuth

// All paths in this router have "/movies" prefixed to them

// GET "/skilltoys/new" - New Route
router.get('/new', isLoggedIn, skilltoysCtrl.new); //security version
// router.get('/new', skilltoysCtrl.new); //non-security version


// POST "/skilltoys" - Create Route
router.post("/", isLoggedIn, skilltoysCtrl.create); //security version
// router.post("/", skilltoysCtrl.create); //non-security version

// GET "/skilltoys" - Index Route
router.get('/', skilltoysCtrl.index);

// GET "/skilltoys/:id" - Show Route
router.get('/:id', skilltoysCtrl.show);

module.exports = router;
