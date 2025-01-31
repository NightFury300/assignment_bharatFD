import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FAQForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/faqs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      /*const updateCacheRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/clear-cache`)
      if(updateCacheRes.ok)
        console.log("Cache Cleared");*/
        
      const data = await response.json();
      console.log('FAQ created:', data);
      alert('FAQ created successfully!');
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error creating FAQ:', error);
      alert('Failed to create FAQ.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Answer:</label>
        <CKEditor
          editor={ClassicEditor}
          data={answer}
          onChange={(event, editor) => {
            const data = editor.getData();
            setAnswer(data);
          }}
          config={{licenseKey:import.meta.env.VITE_CK_LICENSE_KEY}}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FAQForm;