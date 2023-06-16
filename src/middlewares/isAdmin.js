import { destructureToken } from "../utils/index.js";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

export const isAdmin = async (req, res, next) => {
  const { username } = jwt.verify(
    await destructureToken(req),
    process.env.SECRET
  );
  const { role } = await User.findOne({ username });

  if (role !== "admin") {
    return res.status(401).json("Unauthorized");
  }
  next();
};
