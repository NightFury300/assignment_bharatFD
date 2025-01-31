import { expect } from 'chai';
import request from 'supertest';
import { app } from '../app.js';
import './testsSetup.js';

describe('FAQ API', () => {
  it('should fetch FAQs in Bengali', async () => {
    const res = await request(app).get('/api/faqs?lang=bn');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });

  it('should fetch FAQs in Hindi', async () => {
    const res = await request(app).get('/api/faqs?lang=hi');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });

  it('should fetch FAQs in English', async () => {
    const res = await request(app).get('/api/faqs?lang=en');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });

  it('should fetch FAQs, fallback to english', async () => {
    const res = await request(app).get('/api/faqs?lang=fr');
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
  });

  it('should create a new FAQ', async () => {
    const newFAQ = {
      question: 'What is React?',
      answer: '<p>React is a JavaScript library...</p>',
    };
    const res = await request(app).post('/api/faqs').send(newFAQ);
    expect(res.status).to.equal(201);
    expect(res.body.data).to.have.property('question');
    expect(res.body.data.question).to.equal(newFAQ.question);
  });
});
