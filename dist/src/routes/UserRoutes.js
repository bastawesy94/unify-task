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
const usersRouter = express_1.default.Router();
const UserSchema = require('../models/UserSchema');
usersRouter.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const allUsers = new UserSchema(user);
        const result = allUsers.save();
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
}));
usersRouter.get('/users/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield UserSchema.find();
        res.send(allUsers);
    }
    catch (err) {
        console.log(err);
    }
}));
usersRouter.get('/users/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params;
    console.log("userId ==> ", userId);
    try {
        const user = yield UserSchema.findOne(userId);
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
}));
usersRouter.delete('/users/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params;
    console.log("userId ==> ", userId);
    try {
        const user = yield UserSchema.findByIdAndDelete(userId);
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
}));
usersRouter.put('/users/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userBody = req.body;
    const userId = req.params;
    console.log("userId ==> ", userId);
    try {
        const user = yield UserSchema.findByIdAndUpdate(userId, userBody);
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
}));
//user and password auth (basic)
usersRouter.post('/users/auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userBody = req.body;
    try {
        const user = yield UserSchema.find(userBody);
        console.log("user:", user);
        if (user.length > 0)
            return res.send("authenticated !");
        return res.send({ statusCod: 404, msg: "not found" });
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = usersRouter;
