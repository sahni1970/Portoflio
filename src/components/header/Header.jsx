import React from 'react'
import './header.css'
import CTA from './CTA'
import MY from '../../assets/my.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kumar Saurav</h1>
      
        <CTA/>

        <HeaderSocials/>

       <div className="my">
       <img src={MY} alt="my"/> 
       </div>      
       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
