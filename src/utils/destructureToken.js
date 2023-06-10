export const destructureToken = async (payload) => {
  const authorization = payload.get("authorization");
  if (!authorization || !authorization.toLowerCase().startsWith("bearer")) {
    return false;
  }

  return authorization.split(" ")[1];
};
