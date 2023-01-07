/* eslint-disable no-unused-vars */
import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#portals')
  return (
    <nav className="bg-[#000000] bg-opacity-25 max-w-max flex py-3 px-7 z-[2] fixed left-1/2 -translate-x-2/4 bottom-8 gap-3 rounded-[3rem] backdrop-blur-lg">
      {/* <div className={`bg-transparent p-4 rounded-[3rem] flex text-[#ffffff99] text-lg hover:bg-[#0000004C] active:bg-[pink] active:text-[#1f1f38]`}>
        <a href="#profile" onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}><AiOutlineHome/></a>
      </div> */}
        <div className={`bg-transparent p-4 rounded-[3rem] flex text-[#ffffff99] text-lg hover:bg-[#0000004C] active:bg-[#2c2c6c] active:text-[#1f1f38]`}>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      </div>
      <div className={`bg-transparent p-4 rounded-[3rem] flex text-[#ffffff99] text-lg hover:bg-[#0000004C] active:bg-[#2c2c6c] active:text-[#1f1f38]`}>
        <a href="#portals" onClick={() => setActiveNav('#portals')} className={activeNav === '#badges' ? 'active' : ''}><BiBook/></a>
      </div>
        <div className={`bg-transparent p-4 rounded-[3rem] flex text-[#ffffff99] text-lg hover:bg-[#0000004C] active:bg-[#2c2c6c] active:text-[#1f1f38]`}>
        <a href="#communities" onClick={() => setActiveNav('#communities')} className={activeNav === '#communities' ? 'active' : ''}><RiServiceLine/></a>
      </div>
      <div className={`bg-transparent p-4 rounded-[3rem] flex text-[#ffffff99] text-lg hover:bg-[#0000004C] active:bg-[#2c2c6c] active:text-[#1f1f38]`}>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      </div>
    </nav>
  )
}

export default Nav