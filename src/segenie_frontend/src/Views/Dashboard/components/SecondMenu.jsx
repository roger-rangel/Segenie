import React from "react";
import { HiOutlineFire, HiMusicalNote, HiCube, HiChatBubbleOvalLeftEllipsis, HiQrCode, HiOutlinePuzzlePiece, HiGlobeAlt, HiOutlineSparkles } from "react-icons/hi2";
import { IconContext } from "react-icons";

const SecondMenu = () => {
  return (
    <menu className="h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0">    
       
        <IconContext.Provider value={{ color: "#f1faee", className: "global-class-name" }}>
          <ul id="mainMenu" className="w-full pt-5 flex flex-col items-left">
            <div className="flex relative cursor-pointer flex-col">
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942] text-[#f1faee] hover:text-[white]">
                <HiOutlineFire className="ml-4" />
                <h1 className="ml-4">Home</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiMusicalNote className="ml-4" />
                <h1 className="ml-4">Music</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiGlobeAlt className="ml-4" />
                <h1 className="ml-4">Metaverse</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiOutlinePuzzlePiece className="ml-4" />
                <h1 className="ml-4">Education</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiQrCode className="ml-4" />
                <h1 className="ml-4">Crypto</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiCube className="ml-4" />
                <h1 className="ml-4">Web3</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiChatBubbleOvalLeftEllipsis className="ml-4" />
                <h1 className="ml-4">ChatGPT</h1>
              </li>
              <li className="flex list-none mx-2 my-0 relative items-center py-2 rounded-lg hover:bg-[#231942]  text-[#f1faee] hover:text-[white]">
                <HiOutlineSparkles className="ml-4" />
                <h1 className="ml-4">VR / AR</h1>
              </li>
            </div>
          </ul>
          </IconContext.Provider>
    </menu>
  );
}

export default SecondMenu;