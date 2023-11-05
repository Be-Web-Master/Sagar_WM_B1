const express = require("express");
const { createUser, logInUser, logOutUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.post("/login-user", logInUser);
userRouter.post("/logout-user", logOutUser);

module.exports = { userRouter };
