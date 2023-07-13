import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BiLogoInstagram} from 'react-icons/bi'

import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_86c9q1i', 'template_dxxh886', form.current, 'YOUR_PUBLIC_KEY')


   e.target.reset()
  
  };


  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    

    <div className="container contact__container">
    <div className="contact__options">
    <article className="contact__option">
    <MdOutlineEmail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>sahanisaurav2000@gmail.com</h5>
    <a href="mailto:sahanisaurav2000@gmail.com" target="_blank">Send a message</a>
    </article>

    <article className="contact__option">
    <iLogoInstagram className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>Saurav</h5>
    <a href="https://m.me/sauravsahani72/" target="_blank">Send a message</a>
    </article>

    <article className="contact__option">
    <BsWhatsapp className='contact__option-icon' />
    <h4>Whatsapp</h4>
    <a href="https://wa.me/+919650765131" target="_blank">Send a message</a>
    </article>

    </div>
    {/* END OF CONTACT OPTIONS   */}
    <form ref={form} onSubmit={sendEmail}>
     <input type="text" name='name' placeholder='Your Full Name' required/>
     <input type="email" name='email' placeholder=' Your email' required/>
     <textarea name="message" rows="7" placeholder='Your Message' required/>
     <button type='submit' className='btn btn-primary'>Send Message</button>    
    </form>
    </div>
    </section>
  )
}

export default Contact
