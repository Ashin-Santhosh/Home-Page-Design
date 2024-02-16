import { useState } from "react";
import { close, logoicon, menu, logo, search } from '../assets';
import { navLinks } from '../constants';


const Logo = () => (
  <div className="text-white">
    <a href="#">
      <p className="text-3xl">Trend</p>
      <div className="flex">
        <p className="font-bold text-3xl">Campus</p>
        <img src={logoicon} alt="trendcampus" className="w-[30px] h-[25px] mt-[5px]" />
      </div>
    </a>
  </div>
);

const NavLinks = () => (
  <ul className="list-none sm:flex hidden justify-end items-center flex-1 mt-4">
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins font-medium cursor-pointer text-[18px] text-white ${
          index === navLinks.length - 1 ? 'mr-0' : 'mr-8'
        }`}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
    <li>
      <button className="bg-red-600 rounded ml-8 px-3 py-1 text-white font-medium">Contact Us</button>
    </li>
  </ul>
);

const Search = ({ notsearch, setSearch }) => (
  <div className="sm:flex hidden flex-col ml-8 relative">
    <div className="flex gap-1 justify-end">
      <input
        type="text"
        className={`block rounded w-[70%] absolute top-0 left-0 ${notsearch ? '' : 'opacity-0 pointer-events-none'}`}
      />
      <img
        className="cursor-pointer"
        src={search}
        alt="search"
        onClick={() => setSearch((prev) => !prev)}
      />
    </div>
    <img className="max-w-[200px] w-[180px]" src={logo} alt="logo" />
  </div>
);


const MobileMenu = ({ toggle, setToggle }) => (
  <div className="sm:hidden flex flex-1 justify-end items-center z-10">
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain"
      onClick={() => setToggle((prev) => !prev)}
    />
    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mb-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [notsearch, setSearch] = useState(false);

  return (
    <header className="w-full flex ss:py-6 md:py-4 pl-3 justify-between items-center navbar">
      <Logo />
      <NavLinks />
      <Search notsearch={notsearch} setSearch={setSearch} />
      <MobileMenu toggle={toggle} setToggle={setToggle} />
    </header>
  );
};


export default Navbar