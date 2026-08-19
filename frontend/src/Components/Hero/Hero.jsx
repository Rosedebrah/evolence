import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import heroBg from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div
      className='hero'
      id='hero'
      style={{ backgroundImage: `linear-gradient(rgba(8,0,58,0.75), rgba(8,0,58,0.75)), url(${heroBg})` }}
    >
      <div className='hero-inner'>

        {/* Badge */}
        <div className='hero-badge'>
          <span className='hero-badge-dot' />
          Digitisation · Automation · Design · Training
        </div>

        {/* Heading */}
        <h1 className='hero-heading'>
          Stop Losing Time to<br />
          <span className='hero-heading-accent'>Paper Records & Manual Work</span>
        </h1>

        {/* Sub */}
        <p className='hero-sub'>
          Evolence digitises your school or business, automates the busywork,
          and builds systems your team will actually use. All done for you from start to finish.
        </p>

        {/* CTAs */}
        <div className='hero-actions'>
          <Link to='contact' smooth={true} offset={-260} duration={500}>
            <button className='btn hero-btn-primary'>
              Book a Free Call <img src={dark_arrow} alt='' />
            </button>
          </Link>
          <Link to='services' smooth={true} offset={-260} duration={500}>
            <button className='btn hero-btn-secondary'>
              See What We Do
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className='hero-stats'>
          <div className='hero-stat'>
            <span className='hero-stat-number'>5+</span>
            <span className='hero-stat-label'>Service Areas</span>
          </div>
          <div className='hero-stat-divider' />
          <div className='hero-stat'>
            <span className='hero-stat-number'>10+</span>
            <span className='hero-stat-label'>Teams Helped</span>
          </div>
          <div className='hero-stat-divider' />
          <div className='hero-stat'>
            <span className='hero-stat-number'>100%</span>
            <span className='hero-stat-label'>Done For You</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero