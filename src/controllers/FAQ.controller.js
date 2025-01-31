import { asyncHandler } from "../utils/asyncHandler.js";
import { FAQ } from "../models/FAQ.model.js";
import { APIResponse } from "../utils/APIResponse.js";

const fetchFAQs = asyncHandler(async (req,res) => {
    const { lang = 'en' } = req.query;
    const faqs = await FAQ.find();

  const translatedFAQs = faqs.map((faq) => ({
    question: faq.getTranslatedQuestion(lang),
    answer: faq.answer,
  }));

  return res.status(200).json(new APIResponse(200,translatedFAQs,"FAQs fetched successfully."))
})

export {fetchFAQs}