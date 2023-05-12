import express from 'express';
const usersRouter = express.Router();
const UserSchema = require('../models/UserSchema');

usersRouter.post('/users', async (req, res) => {
  const user = req.body;
  try {
    const allUsers = new UserSchema(user);
    const result = allUsers.save();
    res.send(result)
  }
  catch (err) {
    console.log(err);
  }
});

usersRouter.get('/users/all', async (req, res) => {
  try {
    const allUsers = await UserSchema.find();
    res.send(allUsers)
  }
  catch (err) {
    console.log(err);
  }
});

usersRouter.get('/users/:_id', async (req, res) => {
  const userId = req.params;
  console.log("userId ==> ", userId)
  try {
    const user = await UserSchema.findOne(userId);
    res.send(user)
  }
  catch (err) {
    console.log(err);
  }
});

usersRouter.delete('/users/:_id', async (req, res) => {
  const userId = req.params;
  console.log("userId ==> ", userId)
  try {
    const user = await UserSchema.findByIdAndDelete(userId);
    res.send(user)
  }
  catch (err) {
    console.log(err);
  }
});

usersRouter.put('/users/:_id', async(req, res) => {
  const userBody = req.body;
  const userId = req.params;
  console.log("userId ==> ", userId)
  try {
    const user = await UserSchema.findByIdAndUpdate(userId,userBody);
    res.send(user)
  }
  catch (err) {
    console.log(err);
  }
});

export default usersRouter;