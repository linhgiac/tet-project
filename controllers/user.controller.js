const { isEmpty } = require('lodash');
const bcrypt = require('bcrypt');

const Users = require('../models/user.model');

const userController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Check fill all fields
            if (!name || !email || !password) {
                return res
                    .status(400)
                    .json({ msg: 'Please fill in all fields' });
            }

            //Check valid email
            if (!isEmail) {
                return res.status(400).json({ msg: 'Invalid email' });
            }

            //Check existed email
            const user = await Users.findOne({ email });
            if (!isEmpty(user)) {
                return res
                    .status(400)
                    .json({ msg: 'This email already exists' });
            }

            //Check password's length
            if (password.length < 6) {
                return res
                    .status(400)
                    .json({ msg: 'Password must be at least 6 characters' });
            }

            //Hash password
            const hashPassword = await bcrypt.hash(password, 12);

            const newUser = new Users({
                name,
                email,
                password: hashPassword,
            });

            //Save
            await newUser.save();

            res.json({ msg: 'Register Test', data: newUser });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) {
        return true;
    }

    return false;
}

module.exports = userController;
