import React from 'react'
import CV from '../assets/cv.pdf'
import './Cta.css'


function Cta() {
  return (
    <div className='btns'>

        <a href={CV} download className='btn'> View My CV</a>
        <a href="#contact" className='btn'>Talk to me </a>
        
        </div>
  )
}

export default Cta