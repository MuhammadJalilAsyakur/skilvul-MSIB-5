const mongoose = require('mongoose');

const db_url = "mongodb+srv://jalilasyakur:123@cluster0.rgzvy2p.mongodb.net/mongoose_gaming"

const db = mongoose.connect(db_url)

module.exports = db;