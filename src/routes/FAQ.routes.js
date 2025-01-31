import { Router } from "express";
import { fetchFAQs } from "../controllers/FAQ.controller.js";

const router = Router()

router.route("/faqs").get(fetchFAQs)

export default router