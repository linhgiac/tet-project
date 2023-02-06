const Users = require('../models/user.model');

const authAdmin = async (req, res, next) => {
    try {
        const user = await Users.findById(req.user.id);
        if (!user) {
            res.status(500).json({ msg: 'No user exists' });
        }
        if (user && user.role !== 1) {
            res.status(500).json({ msg: 'Access denied.' });
        }
        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
module.exports = authAdmin;
