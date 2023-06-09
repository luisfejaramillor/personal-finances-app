import { compare, generateToken } from "../utils/index.js";
import { User } from "../models/index.js";

export const authenticateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const passwordCorrect =
      user === null ? false : await compare(password, user.password);
    if (!passwordCorrect) {
      res.status(401).json({
        error: "Invalid username or password",
      });
      return;
    }
    const token = await generateToken({id: user._id, username: user.username})
    res.json({
      username,
      token
    })
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};
