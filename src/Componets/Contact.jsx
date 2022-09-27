import React from 'react'
import './Contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { GrTwitter } from 'react-icons/gr'
import { SiLinkedin } from 'react-icons/si'

function Contact() {
  return (
    <section id='contact'>

      <h1>Let's Chat</h1>

      <h2>Fill the Form Below</h2>
<div className='chat'>
        <form action="" className='form'>
          <input type="text" name='name' placeholder='Enter Your Full Name' required/>
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" rows="8" placeholder='Your Message '  required></textarea>
          <button type='submit' className='btns'>begin chat</button>
          </form>
      
      <div className='chatbtns'>
        <article className='emailbtn'>
          <a href='mailto:alexngii6711@gmail.com'  className='icons'>
            <h1>Email Me </h1>
          <MdOutlineEmail/>
          </a>
          </article>

          <article className='emailbtn'>
          <a href='mailto:alexngii6711@gmail.com' className='icons'>
            <h1>Tweet Me </h1>
          <GrTwitter/>
          </a>
          </article>

          <article className='emailbtn'>
          <a href='mailto:alexngii6711@gmail.com' className='icons'>
            <h1> Inbox Linkedin </h1>
          <SiLinkedin/>
          </a>
          </article>
      </div>
      </div>
      </section>
  )
}

export default Contact