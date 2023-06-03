import { encrypt, compare } from "../utils/index.js";



export const createUser = async (req, res) => {
    try {
      const password = req.body.password
      const result = await compare(password, await encrypt(password)) 
      res.json(result);
    } catch (error) {
      res.status(404), json("You are nor allowed");
    }
};