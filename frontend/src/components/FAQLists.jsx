import React, { useState, useEffect } from 'react';

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    fetchFAQs();
  }, [lang]);

  const fetchFAQs = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/faqs?lang=${lang}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      
      setFaqs(jsonData.data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  return (
    <div>
      <h1>FAQs</h1>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
      </select>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <h3>{faq.question}</h3>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQList;