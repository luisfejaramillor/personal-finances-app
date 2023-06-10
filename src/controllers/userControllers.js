import { User } from "../models/index.js";
import { encrypt, compare, generateToken, destructureToken } from "../utils/index.js";

export const createUser = async (req, res) => {
  try {
    const body = { ...req.body, password: await encrypt(req.body.password) };
    const user = await User.create(body);
    return res.json(user);
  } catch (error) {
    return res.status(404).json({ error });
  }
};

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
    const token = await generateToken({
      id: user._id,
      username: user.username,
    });
    res.json({
      username,
      token,
    });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export const deleteUser = async (req, res) => {
  try {

    

    // const user = await User.findOne({ username });
    res.json('entré')
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};
