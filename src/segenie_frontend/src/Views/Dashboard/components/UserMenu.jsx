import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { HiFingerPrint, HiBell, HiOutlineChatBubbleOvalLeft, HiUser } from "react-icons/hi2";

const UserMenu = () => {

  const navigate = useNavigate();
  const profile = () => {
    navigate('/profile');
  };

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
    <menu className="h-screen bg-[#19162c] max-[768px]:hidden flex flex-col items-center shadow-xl sticky top-0">
        <IconContext.Provider value={{ color: "#475569", className: "global-class-name" }}>
            <div className="container flex justify-between pt-[1rem] px-4 pb-[26px] border-b-[1px] border-[#475569]">
                <i className="fingerprint" >
                  <HiFingerPrint />
                </i>
                <i className="notifications">
                  <HiBell />
                </i>
                <i className="chat">
                < HiOutlineChatBubbleOvalLeft />
                </i>
                <i className="cursor-pointer" onClick={profile}>
                  <HiUser color="#2ebf91" />
                </i>
            </div>
        </IconContext.Provider>
        <img src="./icons/Avatar.svg" alt="" className="w-40 mt-4 mb-2 mx-10"/>
        <p className="text-[#e6e6e6] -mt-6 text-lg">Alexander</p>
        <p className="text-[#3b82f6] mt-2 text-sm">Blue Team</p>
        <p className="text-[#504992] mt-1 text-xs">@alexander</p>   
    </menu>
  );
}

export default UserMenu;