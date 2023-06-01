import { Router } from "express";
const router = Router();
import {healthCheck, welcomePage} from '../controllers/index.js'
// import appRoutes from "./products.route.js";
// import userRoutes from "./users.route.js"

router.get("/health", healthCheck)
router.get("/", welcomePage)

export default router;