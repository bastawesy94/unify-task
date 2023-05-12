import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import UsersRouter  from './src/routes/UserRoutes';
import ToDoRoutes from './src/routes/ToDoRoutes';
require('./src/models/ToDoSchema');
require('./src/models/UserSchema');

dotenv.config({});
const bodyParser = require('body-parser');
const app: Express = express();
app.use(bodyParser.json());

//all routes
app.use(UsersRouter);
app.use(ToDoRoutes);

const port = process.env.PORT;

//Server status endpoint
app.get('/status', (req: Request, res: Response) => {
  res.send('TO-DO service is working!');
});


//Start express serevr on port numer => 8000
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

const { MongoClient, ServerApiVersion } = require('mongodb');
import mongoose from 'mongoose';

async function connect() {
  const uri = `mongodb+srv://${process.env.CLUSTER_USER_NAME}:${process.env.CLUSTER_PASSWORD}@unifycluster.cj5loa6.mongodb.net/?retryWrites=true&w=majority`;
  try{
    await mongoose.connect(uri);
    console.log("connected !")
  }
  catch(err){
    console.log(err);
  }
}

connect();