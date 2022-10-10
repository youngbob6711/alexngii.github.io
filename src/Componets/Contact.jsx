import React from 'react'
import './Contact.css'
import { BiChevronsDown } from 'react-icons/bi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'




const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_alkdq59', 'template_rqkol1e', form.current, 'FiN25qlfzBMuwS4DB')

      e.target.reset()
      
    };

  return (
    <section id='contact'>

      <h1 className='chattitle'>Let's Chat <BiChevronsDown className='arrow'/></h1>


      <div className='chatbox'>

        <form ref={form} onSubmit={sendEmail} className='form'>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="number" name='number' placeholder='Your Phone Number' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="8" placeholder='Your Message '  required></textarea>
          <button type='submit' className='submitbtn'>Send Message</button>
          </form>
      
      </div>  
      </section>
  )
}

export default Contact