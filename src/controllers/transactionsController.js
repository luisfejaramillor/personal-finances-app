import { Transaction } from "../models/index.js";
import { getParamsAndUsername } from "../utils/index.js";

export const createTransaction = async (req, res) => {
  try {
    const body = { ...req.body, username: req.userNameId };
    const transaction = await Transaction.create(body);

    return res.json(transaction);
  } catch (error) {
    return res.status(404).json({ error });
  }
};


export const getAllTransactions = async (req, res) => {
  try {
    const body = {...req.query, username: req.userNameId }
    console.log(body)
    const transactions = await Transaction.find(body);
    return res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

