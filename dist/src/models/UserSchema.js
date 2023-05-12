"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
exports.mongoose = require('mongoose');
const UserSchema = new exports.mongoose.Schema({
    userId: Number,
    userName: String,
    password: Number,
    address: String
});
module.exports = exports.mongoose.model('user', UserSchema, 'Users');
