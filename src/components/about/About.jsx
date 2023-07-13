import React from 'react'
import './about.css'
import  MY from '../../assets/my.jpg'
import Expirence from './../expirence/Expirence';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>


    <div className="conatiner about__container">
    <div className="about__me">
    <div className="about__me-image">
    <img src={MY} alt="About Image"/>

    </div>

    </div>

    <div className="about__content">
    <div className="about__cards">
    <article className="about__cards">
      <FaAward className="about__icons"/>
    
  <h5>Education</h5>
 <small>
     2020-24
     B.tech, Delhi Technology University   </small>
  </article>


  <article className="about__cards">
      <VscFolderLibrary className="about__icons"/>
    <h5>Projects</h5>

    <small>2 Completed</small>
    </article>

    </div>
    </div>
    <p>
    I am a final year UG student in Delhi Technology University, pursuing Mathematics and Computing Engineering. I am a Web Developer with focus on the Reactjs,but still exploring other technologies.
    I am a team person and posses a vital expirence in team projects. I have worked on several project as a team as well individually.
    

    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </section>
  )
}

export default About
