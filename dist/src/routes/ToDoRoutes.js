"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const toDosRouter = express_1.default.Router();
const ToDoSchema = require('../models/ToDoSchema');
const ObjectId = require('mongoose').Types.ObjectId;
toDosRouter.post('/to-do', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const toDo = req.body;
    try {
        const allToDos = new ToDoSchema(toDo);
        const result = allToDos.save();
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
}));
toDosRouter.get('/to-do/:_userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params;
    console.log("userId ==> ", userId);
    try {
        var query = { userId: new ObjectId(userId._userId) };
        const toDo = yield ToDoSchema.find(query);
        res.send(toDo);
    }
    catch (err) {
        console.log(err);
    }
}));
toDosRouter.delete('/to-do/:_userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params;
    console.log;
    try {
        const toDo = yield ToDoSchema.deleteMany({ userId: userId._userId });
        res.send(toDo);
    }
    catch (err) {
        console.log(err);
    }
}));
toDosRouter.put('/to-do/:_toDoId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const toDoBody = req.body;
    const toDoId = req.params;
    try {
        const toDo = yield ToDoSchema.findByIdAndUpdate(toDoId._toDoId, toDoBody);
        res.send(toDo);
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = toDosRouter;
