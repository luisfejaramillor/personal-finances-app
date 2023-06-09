import { User } from "../models/index.js";
import { encrypt } from "../utils/index.js";

export const createUser = async (req, res) => {
  try {
    const body = {...req.body, password:  await encrypt(req.body.password) }
    const user = await User.create(body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
