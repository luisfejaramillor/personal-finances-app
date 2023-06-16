import { User } from "../models/index.js";
import { encrypt, compare, generateToken } from "../utils/index.js";

export const createUser = async (req, res) => {
  try {
    const body = { ...req.body, password: await encrypt(req.body.password) };
    const user = await User.create(body);
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const authenticateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username.toLowerCase() });
    const passwordCorrect =
      user === null ? false : await compare(password, user.password);
    if (!passwordCorrect) {
      res.status(401).json({
        error: "Invalid username or password",
      });
      return;
    }
    const token = await generateToken({
      id: user._id,
      username: user.username,
    });
    res.json({
      username,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const username = req.params.id;
  try {
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
