const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title: String,
    details: String,
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
});

module.exports = mongoose.model(
    'todo', ToDoSchema, 'ToDos');