const cloudinary = require("cloudinary");
const Image = require("../model/fileModel");

const uploadImage = async (req, res) => {
  try {
    const { image, name, size } = req.body;

    const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
      image,
      {
        folder: process.env.CLOUD_FOLDER,
      }
    );
    const imageData = await Image.create({
      name,
      size,
      publicId: public_id,
      secureUrl: secure_url,
    });
    res.status(200).json({ imageData });
  } catch (err) {
    res.status(400).json({ err: "nhi chal rahi he" });
  }
};

const getImagesByUserId = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({ images });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { publicId } = req.body;
     await cloudinary.uploader.destroy(publicId);
    const deletedImage = await Image.findOneAndDelete({ publicId });
    res.status(200).json({ deletedImage });
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
  uploadImage,
  getImagesByUserId,
  deleteImage,
};
