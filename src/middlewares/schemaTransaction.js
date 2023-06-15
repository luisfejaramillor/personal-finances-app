import Joi from 'joi';

export const createTransactionSchema = Joi.object({
  account: Joi.string().required(),
  amount: Joi.number().required(),
  category: Joi.string().required(),
  type: Joi.string().valid('income', 'expense').required()
});


export const schemaQueryTransaction = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  account: Joi.string().optional().trim().empty().messages({
    'string.empty': 'Account cannot be empty',
  }),
  category: Joi.string().optional().trim().empty().messages({
    'string.empty': 'Category cannot be empty',
  }),
  date: Joi.date().iso().optional().empty(null).messages({
    'date.format': 'Invalid date format',
    'date.empty': 'Date cannot be empty',
  }),
});