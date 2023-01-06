import React, { useEffect } from "react";
import { HiFingerPrint, HiBell, HiOutlineChatBubbleOvalLeft, HiOutlineCog6Tooth } from "react-icons/hi2";

import { IconContext } from "react-icons";

const UserMenu = () => {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu className="h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0">
        <IconContext.Provider value={{ color: "#475569", className: "global-class-name" }}>
            <div className="container flex justify-between pt-6 px-4 pb-[26px] border-b-[1px] border-[#475569]">
                <i className="profileIcon" >
                <HiFingerPrint />
                </i>
                <i className="profileIcon">
                <HiBell />
                </i>
                <i className="profileIcon">
                <HiOutlineChatBubbleOvalLeft />
                </i>
                <i className="profileIcon">
                <HiOutlineCog6Tooth />
                </i>
            </div>
        </IconContext.Provider>
        <img src="./icons/Avatar.svg" alt="" className="w-60"/>
        <p className="text-[#e6e6e6] -mt-6 text-sm">Nati Kowalska</p>
        <p className="text-[#504992] mt-1 text-xs">@natikowalska</p>
        
    </menu>
  );
}

export default UserMenu;