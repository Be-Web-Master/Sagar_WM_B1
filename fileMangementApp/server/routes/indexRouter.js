const express = require("express");
const { fileRouter } = require("./fileRouter");
const { userRouter } = require("./userRouter");
const indexRouter = express.Router();
indexRouter.use("/file", fileRouter);
indexRouter.use("/user", userRouter);
module.exports = {
  indexRouter,
};
