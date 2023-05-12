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
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoutes_1 = __importDefault(require("./src/routes/UserRoutes"));
const ToDoRoutes_1 = __importDefault(require("./src/routes/ToDoRoutes"));
require('./src/models/ToDoSchema');
require('./src/models/UserSchema');
dotenv_1.default.config({});
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use(bodyParser.json());
//all routes
app.use(UserRoutes_1.default);
app.use(ToDoRoutes_1.default);
const port = process.env.PORT;
//Server status endpoint
app.get('/status', (req, res) => {
    res.send('TO-DO service is working!');
});
//Start express serevr on port numer => 8000
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = `mongodb+srv://${process.env.CLUSTER_USER_NAME}:${process.env.CLUSTER_PASSWORD}@unifycluster.cj5loa6.mongodb.net/?retryWrites=true&w=majority`;
        try {
            yield mongoose_1.default.connect(uri);
            console.log("connected !");
        }
        catch (err) {
            console.log(err);
        }
    });
}
connect();
