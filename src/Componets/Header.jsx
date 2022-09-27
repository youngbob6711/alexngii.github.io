import React from 'react'
import './Header.css'
import NGII from '../assets/ngii2.jpeg'
import Cta from './Cta'
import Sociallinks from './sociallinks'


function Header() {
  return (
    <section id='header' className='section1'>
      <div className='section2'>

        <h1 className='text1'>Hello There</h1>

        <h2 className='text2'>I am Alex Ngii </h2>
        <h3 className='text3'>A Front-End Developer</h3>
        <Cta />
        </div>

        <div className='alexxo'>

          <img className='myimage' src={NGII} alt='' />

        </div>

        <div>
        <Sociallinks />

        </div>



      


    </section>
  )
}

export default Header