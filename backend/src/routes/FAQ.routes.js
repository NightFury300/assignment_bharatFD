import { Router } from "express";
import { fetchFAQs, submitFAQ } from "../controllers/FAQ.controller.js";
import { checkCache } from "../middleware/checkCache.middleware.js";

const router = Router()

router.route("/faqs").get(checkCache,fetchFAQs)
router.route("/faqs").post(submitFAQ)
router.route("/update-cache").get(fetchFAQs)

export default router