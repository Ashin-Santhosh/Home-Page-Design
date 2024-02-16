import React from 'react';
import { W1, W2, W3, W4, W5, W6 } from '../assets';

const Webinar = () => {
  return (
    <div className="bg-gradient-to-tr from-red-900 to-black text-white min-h-screen">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold">Webinar Showcase</h1>
        <p className="mt-4 text-lg">
          Watch the recordings of some of our best-recieved webinars, on demand. Sip, pause ponder<br/>play-enjoy your cold-brew the way you like them.
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center">
        
        <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="relative">
            <img src={W1} alt="Webinar 1" className="w-full h-48 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 m-4">
            <h2 className="text-xl font-bold text-white z-10">Trend <br />Cloud One</h2>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md z-10 w-[50%]">
              View All
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="relative">
            <img src={W2} alt="Webinar 1" className="w-full h-48 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 m-4">
            <h2 className="text-xl font-bold text-white z-10">Trend <br />Managed <br />Service Partner</h2>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md z-10 w-[50%]">
              View All
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="relative">
            <img src={W3} alt="Webinar 1" className="w-full h-48 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 m-4">
            <h2 className="text-xl font-bold text-white z-10">Service <br />& Support</h2>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md z-10 w-[50%]">
              View All
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="relative">
            <img src={W4} alt="Webinar 1" className="w-full h-48 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 m-4">
            <h2 className="text-xl font-bold text-white z-10">Threat <br />Lanscape</h2>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md z-10 w-[50%]">
              View All
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="relative">
            <img src={W5} alt="Webinar 1" className="w-full h-48 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 m-4">
            <h2 className="text-xl font-bold text-white z-10">Trendbr <br />Vision One</h2>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md z-10 w-[50%]">
              View All
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="relative">
            <img src={W6} alt="Webinar 1" className="w-full h-48 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 m-4">
            <h2 className="text-xl font-bold text-white z-10">Trend <br />Workforce <br />One</h2>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md z-10 w-[50%]">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
