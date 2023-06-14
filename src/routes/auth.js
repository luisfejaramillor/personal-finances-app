// Importing necessary helper functions and libraries
import { Router } from "express";

import {
  authenticateUser,
  createUser,
  deleteUser,
} from "../controllers/index.js";
import { createValidator } from "express-joi-validation";
import {
  authorizeUser,
  createUserValidation,
  loginUserValidation,
  isAdmin,
} from "../middlewares/index.js";

// import jwt from "jsonwebtoken";
// Creating a new router instance
const router = Router();

const validator = createValidator({});

// Defining routes with corresponding controller functions
router.post("/login", validator.body(loginUserValidation), authenticateUser);
router.post("/register", validator.body(createUserValidation), createUser);
router.delete("/delete-user/:id", authorizeUser, isAdmin, deleteUser);

// Exporting the router to be used in the main application file
export default router;
