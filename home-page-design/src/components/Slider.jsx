import { useState } from 'react';
import { leftArrow, rightArrow, slide1, slide2, slide3, Facebooki, Youtubei, Instagrami, LinkedIni, Twitteri } from '../assets';

const Slider = () => {
  const icons = [Facebooki, Youtubei, Instagrami, LinkedIni, Twitteri];
  const slides = [
    {
      id: 1,
      heading: "Cyber Security",
      paragraph: "Your Safety our Priority.",
      buttonLabel: "Know More",
      imageUrl: slide1,
    },
    {
      id: 2,
      heading: " Coffe Conversation",
      paragraph: "Meet, Great and Share a cup of Coffe and your worries. ",
      buttonLabel: "Know More",
      imageUrl: slide2,
    },
    {
      id: 3,
      heading: "Highly Motivated Team",
      paragraph: "Want the best of the best? We are where you should look",
      buttonLabel: "Know More",
      imageUrl: slide3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <img src={slides[currentSlide].imageUrl} alt={`Slide ${currentSlide + 1}`} className="w-full max-h-[80vh] object-cover" />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <div className="ml-[2vw] absolute top-1/2 transform -translate-y-1/2">
          <img src={leftArrow} alt="Left Arrow" className="cursor-pointer w-10" onClick={prevSlide} />
        </div>
        <div className="mr-[2vw] absolute top-1/2 transform -translate-y-1/2 right-0">
          <img src={rightArrow} alt="Right Arrow" className="cursor-pointer w-10" onClick={nextSlide} />
        </div>
      </div>

      <div className="absolute bottom-[35%] sm:botton-[30%] left-[15%] text-white w-[75%]">
        <h2 className="md:text-5xl ss:text-2xl font-bold">{slides[currentSlide].heading}</h2>
        <p className="text-1xl w-[80%] ">{slides[currentSlide].paragraph}</p>
        <button className="bg-red-600 rounded px-4 py-2 mt-4">{slides[currentSlide].buttonLabel}</button>
      </div>

      <div className="absolute bottom-4 left-[10%]">
        <div className="flex space-x-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`max-w-20 ss:w-10 md:w-20 h-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="bg-black absolute bottom-6 right-[-7px] flex flex-col rounded-[10px] py-3 pl-2 pr-5 gap-3 items-center space-x-2">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`Icon ${index + 1}`} className="w-6 h-6" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
