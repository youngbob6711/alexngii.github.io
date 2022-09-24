import React from 'react'
import './sociallinks.css'



import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { GrFacebook } from 'react-icons/gr'
import { SiMaildotru } from 'react-icons/si'


function sociallinks() {
  return (
    <div className='links'>
        
        <a href="https://github.com/youngbob6711" target="blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/alex-ngii-03a253232/" target="blank"><BsLinkedin/></a>
        <a href="https://twitter.com/mwaneeki" target="blank"><FiTwitter/></a>
        <a href="#contact" target="blank"><GrFacebook/></a>
        <a href="#contact" target="blank"><BsInstagram/></a>
        <a href="#contact" target="blank"><SiMaildotru/></a>

    </div>
  )
}

export default sociallinks