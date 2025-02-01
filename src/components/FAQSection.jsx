import React, { useState } from 'react';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

  const handleAddFAQ = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleSave = () => {
    // Placeholder for save logic
    alert('FAQs saved!');
  };

  return (
    <div>
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question"
            value={faq.question}
            onChange={(e) => {
              const newFaqs = [...faqs];
              newFaqs[index].question = e.target.value;
              setFaqs(newFaqs);
            }}
          />
          <input
            type="text"
            placeholder="Answer"
            value={faq.answer}
            onChange={(e) => {
              const newFaqs = [...faqs];
              newFaqs[index].answer = e.target.value;
              setFaqs(newFaqs);
            }}
          />
        </div>
      ))}
      <button onClick={handleAddFAQ}>Add FAQ</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default FAQSection;
