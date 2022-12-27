import React, { useEffect } from "react";
// import "./Menu.css";
// import logo from "../img/logo.png";
import Icon1 from '../../../../assets/icons/icon-1.svg'

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
    <menu className="w-full h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0">
      <img src="./img/logo.png" alt="" className="w-12 pt-8"/>
      <ul id="mainMenu">
        <Icon icon={Icon1} />
        <Icon icon={Icon1} />
        <Icon icon={Icon1} />
        <Icon icon={Icon1} />
        <Icon icon={Icon1} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={Icon1} />
        <Icon icon={Icon1} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <img src={icon} alt={icon}/>
  </li>
);

export default Menu;