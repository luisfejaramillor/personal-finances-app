import { Router } from "express";
const router = Router();
import { healthCheck, welcomePage } from "../controllers/index.js";
import authRoutes from "./auth.js";
import transactionRoutes from "./transactions.js";

router.get("/health", healthCheck);
router.get("/", welcomePage);
router.use("/api/v1/", authRoutes);
router.use("/api/v1/finances/", transactionRoutes);

export default router;
