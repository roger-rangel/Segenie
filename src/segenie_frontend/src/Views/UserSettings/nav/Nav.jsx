import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="bg-[#000000] bg-opacity-25 max-w-max flex py-3 px-7 z-[2] fixed left-1/2 -translate-x-2/4 bottom-8 gap-3 rounded-3xl backdrop-blur-lg">
        <div className="">
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#badges" onClick={() => setActiveNav('#badges')} className={activeNav === '#badges' ? 'active' : ''}><BiBook/></a>
            <a href="#communities" onClick={() => setActiveNav('#communities')} className={activeNav === '#communities' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
        </div>
    </nav>
  )
}

export default Nav