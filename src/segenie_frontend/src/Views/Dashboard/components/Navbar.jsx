import React, { useState } from "react";
import close from "../../../../assets/img/close.svg";
import menu from "../../../../assets/img/menu.svg";


export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "roadmap",
      title: "Roadmap",
    },
    {
      id: "clients",
      title: "About Us",
    },
  ];


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 px-6 justify-between items-center navbar">
      <a href="https://segenie.xyz" target="_blank" rel="noopener noreferrer">
      <div  className="w-[124px] h-[32px] flex items-center">
       
          <img src="/img/logo.png" alt="segenie"  className="h-8 mr-1 sm:h-12" />
          <h2 className={`text-white font-poppins font-medium cursor-pointer text-[18px]`}>Segenie</h2>
        
	    </div>
      </a>
      <div className="flex rounded-full bg-[#ff006e] h-6 px-3 ml-10 items-center">Demo Mode</div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href="https://segenie.xyz" target="_blank" rel="noopener noreferrer">{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#212534] absolute top-20 right-0 mx-4 my-2 min-w-[140px] mt-16 rounded-xl sidebar z-40`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href="https://segenie.xyz" target="_blank" rel="noopener noreferrer">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
