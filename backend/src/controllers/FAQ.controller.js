import { asyncHandler } from "../utils/asyncHandler.js";
import { FAQ } from "../models/FAQ.model.js";
import { APIResponse } from "../utils/APIResponse.js";
import { setCache } from "../services/cache.service.js";
import { APIError } from "../utils/APIError.js";

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

const submitFAQ = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;

  if(!question || !answer)
    throw new APIError(400,"Please Provide a Valid Question and Answer")

    const faq = new FAQ({ question, answer });
    await faq.save();

    res.status(201).json(new APIResponse(201,faq,"FAQ Created Successfully"));
})

export {fetchFAQs,submitFAQ}