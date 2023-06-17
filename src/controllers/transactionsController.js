import { Transaction } from "../models/index.js";

export const createTransaction = async (req, res) => {
  try {
    const body = { ...req.body, username: req.userNameId };
    const transaction = await Transaction.create(body);
    return res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 5, ...query } = req.query;
    const body = { ...query, username: req.userNameId };
    const totalCount = await Transaction.countDocuments({
      ...query,
      username: req.userNameId,
    });
    const totalPages = Math.ceil(totalCount / pageSize);

    const skip = (page - 1) * pageSize;
    const transactions = await Transaction.find(body)
      .skip(skip)
      .limit(pageSize);

    return res.json({
      transactions,
      currentPage: page,
      totalPages,
      totalCount,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTotalBalance = async (req, res) => {
  try {
    const transactions = await Transaction.find({ username: req.userNameId });
    const balancePerType = {};
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;
      if (balancePerType[type]) {
        balancePerType[type] += amount;
        return;
      }
      balancePerType[type] = amount;
    });
    return res.json(balancePerType.income - balancePerType.expense);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
