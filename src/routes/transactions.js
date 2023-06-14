// Importing necessary helper functions and libraries
import { Router } from "express";

import { createValidator } from "express-joi-validation";
import { authorizeUser, createTransactionSchema } from "../middlewares/index.js";
import { createTransaction } from "../controllers/index.js";


// import jwt from "jsonwebtoken";
// Creating a new router instance
const router = Router();

const validator = createValidator({});

// Defining routes with corresponding controller functions
router.post("/transaction", validator.body(createTransactionSchema), authorizeUser,  createTransaction);

// Exporting the router to be used in the main application file
export default router;