import React, { useState } from 'react';
import { Plus, Minus, Videoi,Teai } from '../assets';

const Coffee = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showContactDetails, setShowContactDetails] = useState(false);

  const values = [
    {
      question: 'Technology',
      answer: 'Tech talks on evolving trends and deeper aspects of cybersecurity. Brewed to prefection for technology connoisseurs ',
    },
    {
      question: 'Business',
      answer: 'Protecting sensitive data, networks, and systems from cyber threats is crucial for business success and customer trust. Implement robust cybersecurity measures today.',
    },
    {
      question: 'Vision',
      answer: 'Empower individuals and organizations with cutting-edge AI-driven solutions, fostering innovation, efficiency, and positive global impact.',
    },
  ];


  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const cards = [
    {
      id: 1,
      icon: Teai,
      heading: 'Mocha',
      subheading: 'Light and relaxed talk for those who like easy-going conversation sprinkled with insights',
    },
    {
      id: 2,
      icon: Teai,
      heading: 'Americano',
      subheading: 'The perfect blend of acumen clubbed with friendly wisdom for those looking to augment their knowldege ans skills',
    },
    {
      id: 3,
      icon: Teai,
      heading: 'Expresso',
      subheading: 'Intensity and power-packed for those who love to dive deep into specific topics',
    },
  ];


  return (
    <div className="mx-auto py-16 px-20 bg-gradient-to-tr from-red-900 to-black text-white relative">
      <h2 className="md:text-5xl text-3xl font-bold mx-auto text-center mb-4 text-white">Stirring Up Great Conversations Over Coffe!</h2>
      <p className='mx-auto text-center mb-4'> From a varity of topics to choose from, every talk in the series to a flavor and intensity.<br /> Blend the flavor with the intensity you enjoy and get the conversation of your choice.

      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-[5%] " >
        <div>
          {values.map((values, index) => (
            <div key={index} className={`mb-4 ${expandedIndex === index ? 'bg-gradient-to-tr from-red-800 to-red-600 text-white rounded pt-3 pb-10 pl-3 w-[100%] md:w-[70%]' : 'bg-transparent'}`}>
              <div
                className="flex items-center cursor-pointer relative"
                onClick={() => handleToggle(index)}
              >
                {expandedIndex === index ? <img src={Minus} alt="" /> : <img src={Plus} alt="" className='pl-3' />}
                <span className="md:ml-2 font-bold sm:m-auto">{values.question}</span>
              </div>
              {expandedIndex === index && (
                <div className="mt-2 ml-9">
                  <p>{values.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="block">
          {showContactDetails ? (
            <video className="rounded-[10px]" width="100%" height="auto" controls>
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className='rounded-[10px]' src={Videoi} alt="" />
          )}
        </div>
      </div>
      <br />
      <div className='md:flex '>
            <h1 className='text-5xl md:text-5xl my-auto align-middle text-center py-2 px-5'>Intensity</h1>
            <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:ml-[20%] ">
            {cards.map((card) => (
              <div key={card.id} className=" bg-gradient-to-tr from-red-800 to-red-600 p-6 rounded-lg shadow-md">
                <img src={card.icon} alt={`Icon for ${card.heading}`} className="w-6 h-6 mb-4" />
                <h3 className="text-xl font-bold mb-2">{card.heading}</h3>
                <p className=" text-white">{card.subheading}</p>
              </div>
            ))}
          </div>
          </div>
    </div>
  );
};
export default Coffee;
