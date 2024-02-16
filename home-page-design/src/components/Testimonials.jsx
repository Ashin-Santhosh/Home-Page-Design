import { useState } from 'react';
import { T1, T2 } from '../assets';
import { leftArrowr, rightArrowr } from '../assets';

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      imageUrl: T1,
    },
    {
      id: 2,
      imageUrl: T2,
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
    <div className="relative bg-white py-10">
      <div className="container mx-auto py-4 text-center">
        <h1 className="text-4xl font-bold">Brewing Success</h1>
        <p>Partner Testimonials that Perk us up!</p>
      </div>
      <img src={slides[currentSlide].imageUrl} alt={`Slide ${currentSlide + 1}`} className=" mx-auto w-[50%] max-h-[50vh] object-cover" />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <div className="ml-[10vw] absolute top-1/2 transform -translate-y-1/2">
          <img src={leftArrowr} alt="Left Arrow" className="cursor-pointer w-10" onClick={prevSlide} />
        </div>
        <div className="mr-[10vw] absolute top-1/2 transform -translate-y-1/2 right-0">
          <img src={rightArrowr} alt="Right Arrow" className="cursor-pointer w-10" onClick={nextSlide} />
        </div>
      </div>
      <div className="absolute bottom-4 left-[45%]">
        <div className="flex space-x-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`max-w-20 ss:w-10 md:w-20 h-1 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
