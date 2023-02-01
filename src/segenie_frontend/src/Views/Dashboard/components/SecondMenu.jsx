import React from "react";
import { HiOutlineFire, HiMusicalNote, HiCube, HiChatBubbleOvalLeftEllipsis, HiQrCode, HiOutlinePuzzlePiece, HiGlobeAlt, HiOutlineSparkles } from "react-icons/hi2";
import { IconContext } from "react-icons";

//CONTEXT
import { useContext } from 'react';
import NavContext from '../../../Context/NavContext';

//REACT ROUTER
import { NavLink } from 'react-router-dom';

const NavUrl = ({ url, icon, name }) => {
  const { nav, setNav } = useContext(NavContext);
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setNav(!nav);
  };

  return (
    <> 
      <NavLink
        to={`${url}`}
        onClick={() => checkWindowSize()}
        className={({ isActive }) => (isActive ? 'bg-[#231942] rounded-lg relative items-center mx-2 mt-2' : 'mx-2 mt-2')}
      >
        <li className="flex list-none my-0 relative items-center py-2 rounded-lg hover:bg-[#231942] text-[#f1faee] hover:text-[white]">
        <div className="flex ml-4">
          <div className="flex mt-1">
          {icon}
          </div>
          <h1 className="ml-4">{name}</h1>
        </div>   
        </li>
      </NavLink> 
   </>
  );
};

const SecondMenu = () => {
  return (
    <menu className="h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0">    
        <IconContext.Provider value={{ color: "#f1faee", className: "global-class-name" }}>
          <ul id="mainMenu" className="w-full pt-5 flex flex-col items-left">
            <div className="flex relative cursor-pointer flex-col">
              <NavUrl url="/" icon={<HiOutlineFire />} name="Home" />
              <NavUrl url="/music" icon={<HiMusicalNote />} name="Music" />
              <NavUrl url="/metaverse" icon={<HiGlobeAlt />} name="Metaverse" />
              <NavUrl url="/education" icon={<HiOutlinePuzzlePiece />} name="Education" />
              <NavUrl url="/vr_ar" icon={<HiOutlineSparkles />} name="VR / AR" />
              <NavUrl url="/crypto" icon={<HiQrCode />} name="Crypto" />
              <NavUrl url="/web3" icon={<HiCube />} name="Web3" />
              <NavUrl url="/chatgpt" icon={<HiChatBubbleOvalLeftEllipsis />} name="ChatGPT" />
            </div>
          </ul>
        </IconContext.Provider>
    </menu>
  );
}

export default SecondMenu;