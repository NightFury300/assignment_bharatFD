import { asyncHandler } from "../utils/asyncHandler.js";
import { FAQ } from "../models/FAQ.model.js";
import { APIResponse } from "../utils/APIResponse.js";
import { setCache } from "../services/cache.service.js";

const fetchFAQs = asyncHandler(async (req,res) => {
    const { lang = 'en' } = req.query;
    const faqs = await FAQ.find();
    
  const translatedFAQs = faqs.map((faq) => ({
    question: faq.getTranslatedQuestion(lang),
    answer: faq.answer,
  }));

  await setCache(`faqs_${lang}`,translatedFAQs)
  return res.status(200).json(new APIResponse(200,translatedFAQs,"FAQs fetched successfully."))
})

export {fetchFAQs}