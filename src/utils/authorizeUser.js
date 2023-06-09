import jwt from "jsonwebtoken";

export const generateToken = async (payload) => {
  const { id, username } = payload;
  return jwt.sign(
    {
      id,
      username,
      exp: Date.now() + 60 * 1000,
    },
    process.env.SECRET
  );
};
