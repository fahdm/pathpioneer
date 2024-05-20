const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'
 
// POST /api/users
router.post('/',ensureLoggedIn, usersCtrl.create);
router.post('/login', usersCtrl.login);

module.exports = router;