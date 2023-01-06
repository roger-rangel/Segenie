import React, { useState } from "react";
import Icon4 from '../../../../assets/icons/icon-4.svg';
import menu2 from '../../../../assets/gifs/menu-2.gif';
import menu3 from '../../../../assets/gifs/menu-3.gif';
import menu4 from '../../../../assets/gifs/menu-4.gif';
import Add1 from '../../../../assets/icons/add-1.svg';
import Add2 from '../../../../assets/gifs/add2.gif';

const Menu = ({setModal}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <menu className="h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0">
      <img src="./img/logo.png" alt="" className="w-12 pt-4 pb-4"/>
      <ul id="mainMenu" className="w-full pt-5 flex flex-col items-center">
        <li 
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={() => setModal(prevModal => !prevModal)}
          className="list-none mx-5 my-0 relative items-center pb-6">
          {isShown ? <img className={`rounded-full h-10 w-10 cursor-pointer`} src={Add2} alt={Add2}/> : <img className={`rounded-full h-10 w-10`} src={Add1} alt={Add1}/>}
        </li>

        <Icon icon={menu3} />
        <Icon icon={menu2} />
        <Icon icon={menu4} />

        <li className="list-none mx-5 my-0 relative items-center">
          <img className="pb-5" src={Icon4} alt={Icon4}/>
        </li>
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li className="list-none mx-5 my-0 relative items-center pb-6">
    <img className="rounded-full h-10 w-10 " src={icon} alt={icon}/>
  </li>
);

export default Menu;