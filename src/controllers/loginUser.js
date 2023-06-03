export const authenticateUser = async (_, res) => {
    try {
      res.json('Hola usuario');
    } catch (error) {
      res.status(404), json("You are nor allowed");
    }
};