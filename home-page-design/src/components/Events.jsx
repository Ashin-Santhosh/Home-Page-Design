import React from 'react';
import { EImg1, EImg2, EImg3 } from '../assets';

const Event = () => {
  return (
    <div className="bg-black text-white min-h-[100vh] relative">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold">Upcoming Event</h1>
        <p className="mt-4 text-lg w-[80%] mx-auto">
          Attend a live webinar with industry stalwarts sharing their views,
          tips and vision on trends that are reinventing the way we work, live
          and function. Register for the upcoming webinar or choose as per your
          preference!
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center mt-10">
        <div className="relative w-full md:w-1/3 p-4 mb-10">
          <div className="relative">
            <img src={EImg1} alt="Event 1" className="w-full h-50 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="mt-2 text-gray-300 border w-fit p-1 text-[10px]">
              Trend Cloud One
            </p>
            <h2 className="text-xl font-bold text-white">Workload Security Demo</h2>
            <p className="mt-2 text-gray-300">
              06 Apr 2023|14:3-15:30(SGST)<br />
              SPEAKER:<br />
              RODGER KOESCH
            </p>
            <p className=" text-white"><span className='text-red-500'>Technical Sales Engineer,Trend Micro</span><br />EPISODE 01</p>
          </div>
          <button className="absolute bottom-[-30px] left-4 bg-red-600 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>

        <div className="relative w-full md:w-1/3 p-4 mb-10">
          <div className="relative">
            <img src={EImg3} alt="Event 1" className="w-full h-50 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="mt-2 ml-2 text-gray-300 border w-fit p-1 text-[10px]">
              Trend Cloud One
            </p>
            <h2 className="text-xl font-bold text-white">Discover the Undiscovered</h2>
            <p className="mt-2 text-gray-300">
            06 Apr 2023|14:3-15:30(SGST)<br />
              SPEAKER:<br />
              AMISH DABHI
            </p>
            <p className=" text-white"><span className='text-red-500'>Technical Sales Engineer,Trend Micro</span><br />EPISODE 01</p>
          </div>
          <button className="absolute bottom-[-30px] left-4 bg-red-600 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>
        <div className="relative w-full md:w-1/3 p-4 mb-10">
          <div className="relative">
            <img src={EImg2} alt="Event 1" className="w-full h-50 object-cover rounded-md" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <p className="mt-2 ml-2 text-gray-300 border w-fit p-1 text-[10px]">
              Trend Cloud One
            </p>
            <h2 className="text-xl font-bold text-white">Introduction to Email Security</h2>
            <p className="mt-2 text-gray-300">
            06 Apr 2023|14:3-15:30(SGST)<br />
              SPEAKER:<br />
              BILAL ISSA
            </p>
            <p className=" text-white"><span className='text-red-500'>Technical Sales Engineer,Trend Micro</span><br />EPISODE 01</p>
          </div>
          <button className="absolute bottom-[-30px] left-4 bg-red-600 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
