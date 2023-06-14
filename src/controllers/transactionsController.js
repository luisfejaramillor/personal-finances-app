import { Transaction } from "../models/index.js";


export const createTransaction = async (req, res) => {
    try {
        // const transaction = await Transaction.create(req.body);

      return res.json('holiiii');
    } catch (error) {
      return res.status(404).json({ error });
    }
  };