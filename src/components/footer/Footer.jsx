import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer__logo'>Kumar Saurav</a>
    <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#expirence">Expirence</a></li>
    
    <li><a href="#portfolio">Portfolio</a></li>
    
    <li><a href="#contact">Contact</a></li>
    </ul>
    
    <div className="footer__socials">
    <a href="https://www.facebook.com/saurav.sahani.56829/"><FaFacebookF/></a>
    <a href="https://www.instagram.com/sauravsahani72/"><FiInstagram/></a>
    <a href="https://twitter.com/SauravS28286458"><BsTwitter/></a>
    </div>

     <div className="footer__copyright">
     <small>&copy:EGATOR Tutorials. All rights reserved.</small>
     </div>
    </footer>
  )
}

export default Footer