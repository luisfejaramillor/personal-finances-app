import mongoose from "mongoose";

const createTransactionSchema = mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usersFinance',
    required: true
  },
  account: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  }
});

export const Transaction = mongoose.model("Transaction", createTransactionSchema);
