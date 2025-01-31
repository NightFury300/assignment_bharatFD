import { expect } from 'chai';
import { FAQ } from '../models/FAQ.model.js';

describe('FAQ Model', () => {
  it('should return the translated question', () => {
    const faq = new FAQ({
      question: 'What is Node.js?',
      answer: 'Node.js is a runtime enviroment for javascript',
      translations: {
        question_hi: 'Node.js क्या है?',
        question_bn: 'Node.js কি?',
      },
    });

    expect(faq.getTranslatedQuestion('en')).to.equal('What is Node.js?');

    expect(faq.getTranslatedQuestion('hi')).to.equal('Node.js क्या है?');

    expect(faq.getTranslatedQuestion('bn')).to.equal('Node.js কি?');

    expect(faq.getTranslatedQuestion('fr')).to.equal('What is Node.js?');
  });
});
