const express = require("express");
const { getImagesByUserId, uploadImage, deleteImage } = require("../controllers/fileController");

const fileRouter = express.Router();

fileRouter.post("/upload-image",uploadImage)
fileRouter.get("/get-image", getImagesByUserId)
fileRouter.delete("/delete-image",deleteImage)

module.exports = {
  fileRouter,
};
