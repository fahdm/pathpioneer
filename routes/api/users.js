const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

// All paths start with '/api/users'
 
// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

module.exports = router;