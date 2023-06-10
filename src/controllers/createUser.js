import { User } from "../models/index.js";
import { encrypt } from "../utils/index.js";

export const createUser = async (req, res) => {
  try {
    const body = {...req.body, password:  await encrypt(req.body.password) }
    const user = await User.create(body);
    return res.json(user);
  } catch (error) {
    return res.status(404).json({error});
  }
};
