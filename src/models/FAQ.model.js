import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: true 
    },
  answer: { 
    type: String, 
    required: true 
    },
  translations: {
    question_hi: String,
    question_bn: String
    },
});

faqSchema.methods.getTranslatedQuestion = (languageCode) => {
  const translationKey = `question_${languageCode}`;
  return this.translations[translationKey] || this.question;
};

export const FAQ = mongoose.model('FAQ', faqSchema);
