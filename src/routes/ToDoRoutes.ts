import express from 'express';
const toDosRouter = express.Router();
const ToDoSchema = require('../models/ToDoSchema');
const ObjectId = require('mongoose').Types.ObjectId;

toDosRouter.post('/to-do', async (req, res) => {
    const toDo = req.body;
    try {
        const allToDos = new ToDoSchema(toDo);
        const result = allToDos.save();
        res.send(result)
    }
    catch (err) {
        console.log(err);
    }
});

toDosRouter.get('/to-do/:_userId', async (req, res) => {
    const userId = req.params;
    console.log("userId ==> ", userId)
    try {
        var query = { userId: new ObjectId(userId._userId) };
        const toDo = await ToDoSchema.find(query);
        res.send(toDo)
    }
    catch (err) {
        console.log(err);
    }
});

toDosRouter.delete('/to-do/:_userId', async (req, res) => {
    const userId = req.params;
    console.log
    try {
        const toDo = await ToDoSchema.deleteMany({userId:userId._userId});
        res.send(toDo)
    }
    catch (err) {
        console.log(err);
    }
});

toDosRouter.put('/to-do/:_toDoId', async (req, res) => {
    const toDoBody = req.body;
    const toDoId = req.params;
    try {
        const toDo = await ToDoSchema.findByIdAndUpdate(toDoId._toDoId, toDoBody);
        res.send(toDo)
    }
    catch (err) {
        console.log(err);
    }
});

export default toDosRouter;