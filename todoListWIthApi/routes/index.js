const express = require('express');
const router = express.Router();

const UserRoute = require('./user_route')

router.get("/", (req, res) => {
    res.json("INI DARI MASA DEPAN")
})

router.use('/users', UserRoute);

module.exports = router;