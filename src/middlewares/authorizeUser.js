import jwt from "jsonwebtoken";

export const authorizeUser = (req, res, next) => {
  const errorMessage = { error: "Token missing or invalid" };
  try {
    const authorization = req.get("authorization");
    if (!authorization || !authorization.toLowerCase().startsWith("bearer")) {
      return res.status(401).json(errorMessage);
    }

    let token = authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.id) {
      return res.status(401).json(errorMessage);
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
