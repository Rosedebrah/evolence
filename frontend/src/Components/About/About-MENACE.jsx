import React from 'react'
import './About.css'
import about_img from '../../assets/about.webp'
import logo from '../../assets/logo.webp'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' loading="lazy" />
      </div>
      <div className="about-right">
        <h3>About EVOLENCE</h3>
        <h2>You Didn't Start a School</h2>
        <h2>or Business to Drown in Admin.</h2>
        <p>You started it to teach, to build, to grow something that matters — not to spend your evenings chasing paper registers, re-entering the same data twice, or hunting through a scattered spreadsheet for one missing record. Evolence exists to get you out of that operational chaos, so you can get back to the work you actually set out to do.</p>
        <p>We partner with schools, SMEs, and founder-led teams to replace manual, fragmented processes with clear, intelligent systems by auditing how you actually work, building clean client-facing tools, and training your team in practical digital skills. Underneath it all, our proprietary <b>Ajubo AI</b> framework quietly handles the busywork: lead qualification, email replies, and data syncs, running invisibly in the background so your team doesn't have to.</p>
        <p>Efficiency isn't about doing more, it's about eliminating the friction of doing it. That's exactly what we build for you: the operational clarity to grow sustainably, make better decisions, and focus on what truly matters.</p>
      </div>
    </div>
  )
}

export default About