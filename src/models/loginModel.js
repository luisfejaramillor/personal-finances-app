import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export const Login = mongoose.model("users", loginSchema);