// Importing necessary helper functions and libraries
import { Router } from "express";

import {authenticateUser, createUser} from '../controllers/index.js'
import { createValidator } from "express-joi-validation";
import { createUserValidation, loginUserValidation } from "../middlewares/index.js";


// import jwt from "jsonwebtoken";
// Creating a new router instance
const router = Router();

const validator = createValidator({});

// Defining routes with corresponding controller functions
router.post("/login", validator.body(loginUserValidation), authenticateUser);
router.post("/register", validator.body(createUserValidation), createUser);

// Exporting the router to be used in the main application file
export default router;