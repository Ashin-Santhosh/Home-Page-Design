import React from 'react';
import { logoicon, Facebooki, Instagrami, LinkedIni, Twitteri, Youtubei, } from '../assets';

const Footer = () => {
  return (
    <footer className="text-white p-10">
      <div className="items-center justify-between">
        <div className="flex justify-between py-4">
          <a href="#">
            <p className="text-3xl">Trend</p>
            <div className="flex">
              <p className="font-bold text-3xl">Campus</p>
              <img src={logoicon} alt="trendcampus" className="w-[30px] h-[25px] mt-[5px]" />
            </div>
          </a>
          <div className="flex items-center space-x-4">
            <img src={LinkedIni} alt="Icon 1" className="w-6 h-6" />
            <img src={Facebooki} alt="Icon 2" className="w-6 h-6" />
            <img src={Twitteri} alt="Icon 3" className="w-6 h-6" />
            <img src={Instagrami} alt="Icon 3" className="w-6 h-6" />
            <img src={Youtubei} alt="Icon 3" className="w-6 h-6" />
          </div>
        </div>
        <hr className="border-t border-white w-f" />
        <div className="flex items-center pt-2">
          <p className="mr-auto">Privacy Policy | Legal</p>
          <p>Copyright ©2024 Trend Micro Incorporated. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
