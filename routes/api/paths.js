const express = require('express');
const router = express.Router();
const pathsCtrl = require('../../controllers/api/paths');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, pathsCtrl.create);

router.get('/', ensureLoggedIn, pathsCtrl.getAll);

router.delete('/:id', ensureLoggedIn, pathsCtrl.deletePath);

module.exports = router;

