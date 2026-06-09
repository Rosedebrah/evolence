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
        <h1>Evolve Better. Work Smarter.</h1>
        <p>We help schools, SMEs, and founder-led teams reduce operational chaos and inefficiency, to work smarter, scale sustainably, and make better decisions by digitising processes, automating workflows, and building clear, practical systems powered by data and modern tools.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero