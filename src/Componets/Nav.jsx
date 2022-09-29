import React from 'react'
import { useState } from 'react'
import './Nav.css'
import { HiHome, HiUser } from 'react-icons/hi'
import { FaHandsHelping } from 'react-icons/fa'
import { GoChevronDown } from 'react-icons/go'
import { BsChatFill } from 'react-icons/bs'








function Nav() {

    const [activeNav, setactiveNav] = useState('#');
  return (
    <nav>
        
        <a href=" # " onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome className='icon'/></a>
        <a href=" #header " onClick={() => setactiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><HiUser className='icon'/></a>
        <a href=" #projects " onClick={() => setactiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaHandsHelping className='icon'/></a>
        <a href=" #contact " onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BsChatFill className='icon'/></a>
        <a href=" #footer " onClick={() => setactiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><GoChevronDown className='icon' /></a>
    

    </nav>
  )
}

export default Nav