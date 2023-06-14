import Joi from 'joi';

export const createTransactionSchema = Joi.object({
  account: Joi.string().required(),
  amount: Joi.number().required(),
  category: Joi.string().required(),
  type: Joi.string().valid('income', 'expense').required()
});