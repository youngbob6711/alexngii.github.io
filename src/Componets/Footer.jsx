import React from 'react'
import './Contact.css'
import './Footer.css'
import { MdOutlineEmail } from 'react-icons/md'
import { GrTwitter } from 'react-icons/gr'
import { SiLinkedin } from 'react-icons/si'





function Footer() {
  return (
    <section id='footer'>

<div className='chatbtns'>
        <article className='emailbtn'>
          <a href='mailto:alexngii6711@gmail.com'>
            <h1 className='icons'>Email Me </h1>
          <MdOutlineEmail className='icon'/>
          </a>
          </article>

          <article className='emailbtn'>
          <a href='mailto:alexngii6711@gmail.com'>
            <h1 className='icons'>Tweet Me </h1>
          <GrTwitter className='icon'/>
          </a>
          </article>

          <article className='emailbtn'>
          <a href='mailto:alexngii6711@gmail.com'>
            <h1 className='icons'> Inbox Linkedin </h1>
          <SiLinkedin className='icon'/>
          </a>
          </article>
      </div>

      <footer className='footernote'>
        
        <p>All rights reserved </p>
        <p> @2022 </p>

      </footer>


    </section>
  )
}

export default Footer