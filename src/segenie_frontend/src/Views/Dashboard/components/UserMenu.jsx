import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { HiFingerPrint, HiBell, HiOutlineChatBubbleOvalLeft, HiOutlineCog6Tooth } from "react-icons/hi2";
import useNewPortal from "../../../Hooks/useNewPortal";
import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.MIXPANEL);

const UserMenu = ({principal}) => {
  const [color, setColor] = useState("purple");

  const {getAllPortals} = useNewPortal();

  const navigate = useNavigate();
  const userSettings = () => {
    navigate('/usersettings');
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
      // go through all of the colors.
      for(let i = 0; i < 5; i++) {
        if(portals.includes(i)) {
          setColor(toColor(i));
          break;
        }
      }
    });
  }, []);

  function toColor(id) {
    switch(id) {
      case 0:
        setColor("blue");
        break;
      case 1:
        setColor("yellow");
        break;
      case 2:
        setColor("green");
        break;
      case 3:
        setColor("red");
        break;
      default: 
        setColor("purple");
    }
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
                <i id="usersettings" className="cursor-pointer" onClick={userSettings}>
                  <HiOutlineCog6Tooth color="#2ebf91" />
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