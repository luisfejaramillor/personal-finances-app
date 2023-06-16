import Joi from "joi";

// Defining schema for POST requests
export const createUserValidation = Joi.object({
  username: Joi.string().trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
  role: Joi.string().valid("admin", "user").default("user"),
});

export const loginUserValidation = Joi.object({
  username: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
});
