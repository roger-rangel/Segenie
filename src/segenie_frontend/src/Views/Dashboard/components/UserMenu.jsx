/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { HiFingerPrint, HiBell, HiOutlineChatBubbleOvalLeft, HiUser } from "react-icons/hi2";
import useNewPortal from "../../../Hooks/useNewPortal";
import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.MIXPANEL);

const UserMenu = ({principal, provider}) => {
  const [color, setColor] = useState("purple");

  const {getAllPortals} = useNewPortal();

  const navigate = useNavigate();
  const profile = () => {
    navigate('/profile', {state: {
      provider
    }});
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

    getAllPortals(principal).then((portals) => {
      console.log(portals);

      for(let i = 0; i < portals.length; i++) {
        console.log(portals[i]);
        if(portals[i].id >= 8 || portals[i].id <= 12) {
          setColor(toColor(Number(portals[i].id)));
          console.log(color);
          break;
        }
      }
    });
  }, [getAllPortals, principal, color]);

  function toColor(id) {
    console.log(id);
    let color = "purple";
    switch(id) {
      case 8:
        color = "blue";
        break;
      case 9:
        color = "yellow";
        break;
      case 10:
        color = "green";
        break;
      case 11:
        color = "red";
        break;
    }
    return color;
  }

  function redirectToChat() {
    mixpanel.track("Redirecting to Think Divergent");
    window.location.replace(`https://thinkdivergent.com/?theme=segenie_${color}`);
  }

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
                <i className="chat cursor-pointer">
                < HiOutlineChatBubbleOvalLeft onClick={redirectToChat}/>
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