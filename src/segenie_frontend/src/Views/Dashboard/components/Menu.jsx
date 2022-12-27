import React, { useEffect } from "react";
import Icon1 from '../../../../assets/icons/icon-1.svg';
import Icon2 from '../../../../assets/icons/icon-2.svg';
import Icon3 from '../../../../assets/icons/icon-3.svg';
import Icon4 from '../../../../assets/icons/icon-4.svg';
import Icon5 from '../../../../assets/icons/icon-5.svg';

const Menu = () => {
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
      <img src="./img/logo.png" alt="" className="w-12 pt-8"/>
      <ul id="mainMenu" className="w-full pt-5 flex flex-col items-center">
        <Icon icon={Icon1} />
        <Icon icon={Icon2} />
        <Icon icon={Icon3} />
        <Icon icon={Icon4} />
        <Icon icon={Icon5} />
      </ul>

    </menu>
  );
}

const Icon = ({ icon }) => (
  <li className="list-none mx-5 my-0 relative items-center">
    <img className="pb-5" src={icon} alt={icon}/>
  </li>
);

export default Menu;