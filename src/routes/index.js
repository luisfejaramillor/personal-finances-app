import { Router } from "express";
const router = Router();
import {healthCheck, welcomePage} from '../controllers/index.js'
import authRoutes from './auth.js'
import transactionRoutes from './transactions.js'
// import appRoutes from "./products.route.js";
// import userRoutes from "./users.route.js"

router.get("/health", healthCheck)
router.get("/", welcomePage)
router.use("/api/v1/", authRoutes)
router.use("/api/v1/finances/", transactionRoutes)
// router.use("/api/v1/user")
export default router;