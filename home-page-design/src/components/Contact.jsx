import React from 'react';
import { CityBg } from '../assets';

const Contact = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${CityBg})`, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <div className="container mx-auto py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Talk to Us</h1>
        <form className="mx-auto mt-8 max-w-[80%] bg-transparent">
          <div className="grid md:grid-cols-2  sm:grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="border-b-2 border-white text-black p-2 outline-none rounded"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className=" border-b-2 border-white text-black p-2 outline-none rounded"
            />
            <input
              type="text"
              placeholder="Your Email*"
              className=" border-b-2 border-white text-black p-2 outline-none rounded"
            />
            <select
  className="border-b-2 border-white text-black p-2 outline-none rounded"
  defaultValue="Select Topic"
>
  <option value="Select Topic" disabled>Select Topic</option>
  <option value="topic1">Topic 1</option>
  <option value="topic2">Topic 2</option>
  <option value="topic3">Topic 3</option>
</select>

          </div>
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
