import React, { useState } from 'react';
import { Plus, Minus, slide2 } from '../assets';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What does Flavor mean?',
      answer: ' Flavor signifies the topic types. We\'re focusing on relevant topics which help expand your knowledge and understanding. Our talks are broadly classified into the following categories:',
      cat1:'Business: Focussed on the business aspect of technology',
      cat2:'Visionary: Thought leadership talks focussed on changing trends, emerging trends and other aspects which influence industry behaviour',
      cat3:'Technology: For the nerds who are interested in understanding behind the scenes',
    },
    {
      question: 'What does it mean by content intensity??',
      answer: 'Answer to Question 2',
      cat1:'',
      cat2:'',
      cat3:'',
    },
    {
      question: 'Can we nominate topics of our choice?',
      answer: 'Answer to Question 3',
      cat1:'',
      cat2:'',
      cat3:'',
    },
    {
      question: 'Can we nominate topics of our choice??',
      answer: 'Answer to Question 4',
      cat1:'',
      cat2:'',
      cat3:'',
    },
    {
      question: 'What time is the webinar? What time zone is "SGT"?',
      answer: 'Answer to Question 5',
      cat1:'',
      cat2:'',
      cat3:'',
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="mx-auto py-16 px-20 bg-gradient-to-tr from-red-900 to-black text-white relative">
      <h2 className="text-5xl font-semibold mx-auto text-center mb-4 text-white">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[5%]">
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className={`mb-4 ${expandedIndex === index ? 'bg-white text-black rounded pt-2 pb-10 px-2' : 'bg-transparent'}`}>
              <div
                className="flex items-center cursor-pointer relative"
                onClick={() => handleToggle(index)}
              >
                {expandedIndex === index ? <img src={Minus} alt="" /> : <img src={Plus} alt="" />}
                <span className="ml-2">{faq.question}</span>
              </div>
              {expandedIndex === index && (
                <div className="mt-2">
                  <p>{faq.answer}</p>
                  <p>{faq.cat1}</p>
                  <p>{faq.cat2}</p>
                  <p>{faq.cat3}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="block ">
          <img className='rounded-[10px]' src={slide2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
