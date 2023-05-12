export const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: Number,
    userName: String,
    password: Number,
    address: String
});

module.exports = mongoose.model(
    'user', UserSchema, 'Users');
