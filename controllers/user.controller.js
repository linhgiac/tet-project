const { isEmpty } = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            //Check fill all fields
            if (!email || !password) {
                res.status(400).json({ msg: 'Please fill in all fields' });
            }

            const user = await Users.findOne({ email });
            console.log('user', user);
            //Check not existed email
            if (isEmpty(user)) {
                return res
                    .status(400)
                    .json({ msg: "This email doesn't exist" });
            }

            //Compare password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({ msg: 'Password is incorrect!' });
            }

            const accessToken = await createAccessToken({ id: user._id });
            // console.log('accessToken', accessToken);

            res.json({ msg: 'Login test!', accessToken });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    logout: (req, res) => {
        res.json({ msg: 'Logout successfully!' });
    },
};

function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) {
        return true;
    }

    return false;
}
const createAccessToken = async payload => {
    return await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '2d',
    });
};


module.exports = userController;
