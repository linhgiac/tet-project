const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name!'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter your email!'],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password!'],
        },
        avatar: {
            type: String,
            default: '../resources/image/default-avatar.jpeg',
        },
        role: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Users', userSchema);
