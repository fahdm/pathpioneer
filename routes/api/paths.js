// routes/api/paths.js

const express = require('express');
const router = express.Router();
const pathsCtrl = require('../../controllers/api/paths');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/paths (create a new path)
router.post('/', ensureLoggedIn, pathsCtrl.create);

// GET /api/paths (get all paths for the logged-in user)
router.get('/', ensureLoggedIn, pathsCtrl.getAll);

module.exports = router;

