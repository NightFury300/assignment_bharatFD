import mongoose from 'mongoose';
import translate from 'google-translate-api-x';

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  translations: {
    question_hi: String,
    question_bn: String,
  },
});

faqSchema.methods.getTranslatedQuestion = function (languageCode) {
  const translationKey = `question_${languageCode}`;
  return this.translations[translationKey] || this.question;
};

faqSchema.pre('save', async function () {
  if (this.isNew) {
    try {
      const hindiTranslation = await translate(this.question, { to: 'hi' });
      this.translations.question_hi = hindiTranslation.text;

      const bengaliTranslation = await translate(this.question, { to: 'bn' });
      this.translations.question_bn = bengaliTranslation.text;
    } catch (error) {
      console.error('Translation error:', error);
      this.translations.question_hi = this.question;
      this.translations.question_bn = this.question;
    }
  }
});

export const FAQ = mongoose.model('FAQ', faqSchema);
