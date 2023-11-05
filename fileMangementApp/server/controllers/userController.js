const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_SECRET_KEY } = process.env;

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: encryptedPassword,
    });
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const logInUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign({ user }, JWT_SECRET);
        console.log({ token });

        res.cookie(JWT_SECRET_KEY, token, {
          maxAge: 600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "Login succesfully" });
      } else {
        res.status(401).json({ msg: "incorrect password" });
      }
    } else {
      res.status(401).json({ msg: "incorrect username address" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};
const logOutUser = async (req, res) => {
  res
    .status(200)
    .clearCookie(process.env.JWT_SECRET_KEY)
    .json({ msg: "successfully logout" });
};

module.exports = { createUser, logInUser, logOutUser };
