const User = require("../modal/userModal");

const getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.find({ name });
    res.status(200).json({ user });
  } catch (error) {
    res.status(200).json({ error });
  }
};

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const { email, password, name } = body;
    const user = await User.create({
      email,
      password,
      name,
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getUserbyEmail = async (req, res) => {
  try {
    const { userEmail } = req.params;
    console.log(userEmail);
    const user = await User.findOne({ email: userEmail });
    res.status(200).json({ user });
  } catch (error) {
    res.status(200).json({ error });
  }
};
const updateByIndex = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    console.log({ name, password, email });
    const user = await User.findOneAndUpdate(
      { email },
      { name, password },
      { new: true }
    );
    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ err });
  }
};

const deleteUserByEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });
    const user = await User.deleteOne({ email, password });
    if (user.deleteCount) {
      res.status(200).json({ user, msg: "User deleted" });
    } else {
      res.status(200).json({ user, msg: "user cannot deleted" });
    }
  } catch (error) {
    res.status(200).json({ error });
  }
};
const upsertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log({ name, email, password });
    const user = await User.findOneAndUpdate(
      { email },
      {
        name,
        email,
        password,
      },
      { new: true, upsert: true }
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createUser,
  getUserByName,
  getUserbyEmail,
  updateByIndex,
  deleteUserByEmailAndPassword,
  upsertUser,
};
