import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Icon4 from '../../../../assets/icons/icon-4.svg';
import menu2 from '../../../../assets/gifs/menu-2.gif';
import menu3 from '../../../../assets/gifs/menu-3.gif';
import menu4 from '../../../../assets/gifs/menu-4.gif';
import Add1 from '../../../../assets/icons/add-1.svg';
import Add2 from '../../../../assets/gifs/add2.gif';

const Menu = ({setModal}) => {
  const [isShown, setIsShown] = useState(6);

  const navigate = useNavigate();
  const portal = () => {
    navigate('/portal');
  };

  return (
    <menu className="h-screen bg-[#19162c] flex flex-col items-center shadow-xl sticky top-0 z-10">
      <img src="./img/logo.png" alt="" className="w-12 pt-4 pb-4"/>
      <ul id="mainMenu" className="w-full pt-5 flex flex-col items-center">
        <div className="flex relative cursor-pointer" onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(6)} >
          {isShown === 1 ? <span className='absolute py-5 px-1 -left-2 rounded-r-lg bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]'></span> : ''}
          <li onClick={() => setModal(prevModal => !prevModal)} className="list-none mx-5 my-0 relative items-center pb-6">
            {isShown === 1 ? <img className={`rounded-full h-10 w-10 cursor-pointer`} src={Add2} alt={Add2}/> : <img className={`rounded-full h-10 w-10`} src={Add1} alt={Add1}/>}
          </li>
          {isShown === 1 ? <span className='absolute left-20 whitespace-nowrap py-2 px-4 rounded-lg bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]'>Minting Demo</span> : ''}
        </div>

        <div className="flex relative cursor-pointer" onMouseEnter={() => setIsShown(2)} onMouseLeave={() => setIsShown(6)} >
          {isShown === 2 ? <span className='absolute py-5 px-1 -left-2 rounded-r-lg bg-gradient-to-r from-[#4ade80] to-[#3b82f6]'></span> : ''}
          <li onClick={portal} className="list-none mx-5 my-0 relative items-center pb-6">
            {isShown === 2 ? <img className={`rounded-full h-10 w-10 cursor-pointer`} src='./gifs/portal.gif' alt={portal}/> : <img className={`rounded-full h-10 w-10`} src={Add1} alt={Add1}/>}
          </li>
          {isShown === 2 ? <span className='absolute left-20 whitespace-nowrap py-2 px-4 rounded-lg bg-gradient-to-r from-[#4ade80] to-[#3b82f6]'>Portal Demo</span> : ''}
        </div>

        <div className="flex relative cursor-pointer" onMouseEnter={() => setIsShown(3)} onMouseLeave={() => setIsShown(6)} >
          {isShown === 3 ? <span className='absolute py-5 px-1 -left-2 rounded-r-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'></span> : ''}
          <Icon icon={menu3}/>
          {isShown === 3 ? <span className='absolute left-20 whitespace-nowrap py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'>Coming Soon!</span> : ''}
        </div>

        <div className="flex relative cursor-pointer" onMouseEnter={() => setIsShown(4)} onMouseLeave={() => setIsShown(6)} >
          {isShown === 4 ? <span className='absolute py-5 px-1 -left-2 rounded-r-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'></span> : ''}
          <Icon icon={menu2}/>
          {isShown === 4 ? <span className='absolute left-20 whitespace-nowrap py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'>Coming Soon!</span> : ''}
        </div>

        <div className="flex relative cursor-pointer" onMouseEnter={() => setIsShown(5)} onMouseLeave={() => setIsShown(6)} >
          {isShown === 5 ? <span className='absolute py-5 px-1 -left-2 rounded-r-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'></span> : ''}
          <Icon icon={menu4}/>
          {isShown === 5 ? <span className='absolute left-20 whitespace-nowrap py-2 px-4 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'>Coming Soon!</span> : ''}
        </div>

        <div className="flex relative cursor-pointer" onMouseEnter={() => setIsShown(6)} onMouseLeave={() => setIsShown(6)} >
          {isShown === 6 ? <span className='absolute top-[0.6rem] py-5 px-2 -left-2 rounded-r-lg bg-gradient-to-r from-[#a855f7] to-[#3b82f6]'></span> : ''} 
          <li className="list-none mx-5 my-0 relative items-center">
            <img className="pb-5" src={Icon4} alt={Icon4}/>
          </li>
        </div>
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