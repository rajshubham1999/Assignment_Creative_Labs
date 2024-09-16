import React, { useState } from 'react';
import './Faq.css'; 

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const faqs = [
    { question: 'What credit score do I need to apply for a credit card?', answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards' },
    { question: ' How can I apply for a credit card online?', answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards' },
    { question: 'Are there any annual fees associated with the credit card?', answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards' },
    { question: ' How can I check my credit card balance and transactions?', answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards' },
    { question: '  What should I do if my credit card is lost or stolen?', answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards' },
    { question: 'Is my credit card information secure?', answer: 'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards' },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div className='faq-main-container'>
    <div className="faq-container">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Faq;
