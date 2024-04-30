import React, { useState } from 'react';
import Ques from './Ques';
import '../styles/Ques.css'; // Import CSS file for custom styling

const QuesList = () => {
  const faqsData = [
    {
      question: 'Who can study MBBS in Russia?',
      answer: 'Students who have completed their high school education with a focus on science subjects like Biology, Chemistry, and Physics are eligible. Proficiency in English or Russian may be required.',
    },
    {
      question: 'Are classes in English or Russian?',
      answer: 'Many universities offer MBBS programs in English for international students. However, some courses may require knowledge of Russian.',
    },
    {
      question: 'How long does the MBBS program take?',
      answer: 'Usually 6 years, including a preparatory year for language training if needed.',
    },
    {
      question: 'What are the tuition fees?',
      answer: 'Fees vary, but generally range from [insert range] per year for international students.',
    },
    {
      question: 'Do I need to take an entrance exam?',
      answer: 'Some universities require entrance exams like NEET, but not all.',
    },
    {
      question: 'What are the living expenses?',
      answer: 'Living costs, including housing and food, average around [insert range] per month.',
    },
    {
      question: 'What job opportunities are available after graduation?',
      answer: 'Graduates can pursue specialization, work as general practitioners, or return to their home countries to practice medicine.',
    },
    {
      question: 'Are there scholarships available?',
      answer: 'Some universities offer scholarships based on merit or need.',
    },
    {
      question: 'How do I get a student visa?',
      answer: 'Apply through the Russian embassy with required documents like an acceptance letter and proof of finances.',
    },
    {
      question: 'Can I work part-time while studying?',
      answer: 'Yes, up to 20 hours per week during the academic year and full-time during breaks, but check local regulations.',
    },
  ];

  const [faqs, setFaqs] = useState(
    faqsData.map((faq) => ({
      ...faq,
      open: false,
    }))
  );

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <Ques key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default QuesList;
