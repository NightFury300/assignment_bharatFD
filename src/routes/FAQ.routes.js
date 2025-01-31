import { Router } from "express";
import { fetchFAQs } from "../controllers/FAQ.controller.js";
import { checkCache } from "../middleware/checkCache.middleware.js";

const router = Router()

router.route("/faqs").get(checkCache,fetchFAQs)

export default router