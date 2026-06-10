import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import heroBg from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div
      className='hero container'
      style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroBg})` }}
    >
      <div className='hero-text'>
        <h1>Smart Background Automation. Beautiful Client Portals.</h1>
        <p>We build done-for-you systems designed for real-world constraints. Powered by the Ajubo AI framework, we handle the technical integrations, data cleanup, and team training so your organization can finally work smarter.</p>
        <button className='btn'>Explore Our Solutions<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero