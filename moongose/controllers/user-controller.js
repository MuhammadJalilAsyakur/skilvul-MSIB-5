const User = require('../models/user');

module.exports = {
    getAlluser: async (req, res) => {
        const users = await User.find();

        res.json({
            message: 'success get all users',
            data: users
        })
    },

    createUser: async (req, res) => {
        let data = req.body;

        await User.create(data);

        res.json({
            message: 'success create user',
            data: data
        })
    }
}