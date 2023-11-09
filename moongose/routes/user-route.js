const express = require('express');
const router = express.Router();

const User = require('../models/user');
const { getAlluser, createUser } = require('../controllers/user-controller');

router.get('/', getAlluser);
router.post('/', createUser);

module.exports = router;