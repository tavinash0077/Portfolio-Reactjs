import React from 'react'
import './home.css';
import Me from "../../assets/avatar-1.svg"
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import AboutMe from '../AboutME/AboutMe';
const Home = () => {
  return (
    <>
      <section className="home container" id= 'home'>
        <div className="intro">
          <img src={Me} alt="" className="home_img" />
          <h1 className="home_name">Avinash Singh</h1>
          <span className="home_education">I'm a Java developer</span>
          <HeaderSocial/>
          <a href="#contact" className='btn'>Hire Me</a>
          <ScrollDown/>
        </div>
        
      </section>
      
      <AboutMe/>
      </>
    )
}

export default Home