import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import logo from '../../assets/logo.png'



const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img'/>
      </div>
      <div className="about-right">
        <h3>About EVOLENCE</h3>
        <h2>Evolve Better. Work Smarter.</h2>
        <p>Evolence exists to help teams evolve how work gets done. We partner with schools, SMEs, and founder-led organizations to replace manual, fragmented processes with clear, intelligent systems. Our work sits at the unique intersection of operational design and advanced automation.</p>
        <p>While we audit processes, build clean client-facing frontends, and train teams in practical digital skills, we supercharge our solutions using our proprietary Ajubo AI framework. By embedding custom AI agents directly into your day-to-day operations, we transform background automation into a smart, invisible workforce that handles lead qualification, email replies, and data syncs seamlessly.</p>
        <p>At Evolence, we believe efficiency is not about doing more; it is about eliminating the friction of doing it. By pairing professional, user-friendly client portals with the underlying power of Ajubo AI, we create the operational clarity organizations need to grow sustainably, make better decisions, and focus on what truly matters.</p>
      </div>
    </div>
  )
}

export default About
