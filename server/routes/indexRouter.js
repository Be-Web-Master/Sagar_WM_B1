const express = require("express");
const User = require("../modal/userModal");
const { createUser, getUserByName, getUserbyEmail, updateByIndex, deleteUserByEmailAndPassword, upsertUser } = require("../Controller/userControl");

const userRouter = express.Router();

userRouter.get("/data", (req, res) => {
  res.status(202).send({ savedData });
});

// const myMiddleWare =
userRouter.post("/create-user", createUser);

userRouter.get("/get-user/:name", getUserByName);

userRouter.get("/get-user-email/:userEmail", getUserbyEmail);

userRouter.patch("/update-index", updateByIndex);

userRouter.delete("/delete-user", deleteUserByEmailAndPassword);

userRouter.put("/upsert-user", upsertUser);

module.exports = { userRouter };
