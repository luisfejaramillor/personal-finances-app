// Importing necessary helper functions and libraries
import { Router } from "express";

import {authenticateUser, createUser} from '../controllers/index.js'
// import jwt from "jsonwebtoken";
// Creating a new router instance
const router = Router();


// Defining routes with corresponding controller functions
router.get("/login", authenticateUser);
router.post("/register", createUser);

// Exporting the router to be used in the main application file
export default router;