const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user)
      return res.status(400).json({ message: "Please try another email" });
    user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .json({ message: "Please use correct email or password" });
    // const match = await User.findOne({ email: req.body.password });
    // if (!match)
    //   return res
    //     .status(400)
    //     .json({ message: "Please try another email or password" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { register, login };
