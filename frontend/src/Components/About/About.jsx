import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'



const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img'/>
      </div>
      <div className="about-right">
        <h3>About EVOLENCE</h3>
        <h2>Evolve Better. Work Smarter.</h2>
        <p>Evolence exists to help teams evolve how work gets done. We partner with schools, SMEs, and founder-led organisations to replace manual, fragmented processes with clear systems, smart automation, and practical digital tools.</p>
        <p>Our work sits at the intersection of digitisation, operations, and data. From setting up efficient workflows and automating day-to-day tasks to training teams in Excel, data, and digital skills, we focus on solutions that are simple, usable, and built for real-world constraints.</p>
        <p>At Evolence, we believe efficiency is not about doing more,it is about working smarter. Our goal is to create operational clarity that allows organisations to grow sustainably, make better decisions, and focus on what truly matters</p>
      </div>
    </div>
  )
}

export default About
