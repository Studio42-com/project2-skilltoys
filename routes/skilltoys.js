const express = require('express');
const router = express.Router();
const skilltoysCtrl = require('../controllers/skilltoys');
//const isLoggedIn = require('../config/auth');

// All paths in this router have "/movies" prefixed to them

// GET "/skilltoys/new" - New Route
// router.get('/new', isLoggedIn, skilltoysCtrl.new);

// POST "/skilltoys" - Create Route
// router.post("/", isLoggedIn, skilltoysCtrl.create);

// GET "/skilltoys" - Index Route
router.get('/', skilltoysCtrl.index);

// GET "/skilltoys/:id" - Show Route
// router.get('/:id', skilltoysCtrl.show);

module.exports = router;
