import jwt from "jsonwebtoken";
import { destructureToken } from "../utils/index.js";

export const authorizeUser = async (req, res, next) => {
  const errorMessage = { error: "Token missing or invalid" };
  try {
    const token = await destructureToken(req);
    if (!token) {
      return res.status(401).json(errorMessage);
    }

    const { id, exp } = jwt.verify(token, process.env.SECRET);

    if (!id) {
      return res.status(401).json(errorMessage);
    }

    if (Date.now() > exp)
      return res.status(401).json({ error: "Token expired" });
    req.userNameId = id;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
