import React from 'react'
import './Team.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import cpoPhoto from '../../assets/cpo.webp'
import ctoPhoto from '../../assets/cto.webp'

const founders = [
  {
    id: 1,
    photo: cpoPhoto,
    initials: 'RAO',
    name: 'Rosedebrah Achieng Ojuok',
    title: 'Co-Founder & Chief Product Officer',
    tag: 'CPO',
    bio: 'Leads the product architecture, UI/UX design, and client deployment frameworks at Evolence. Dedicated to translating complex organisational bottlenecks into intuitive, human-centric digital interfaces — ensuring modern tools are highly usable for schools and local enterprises. Handles local operations, client onboarding, and partnership scaling.',
    linkedin: 'https://linkedin.com/in/rosedebrahojuok',
    email: 'debbie@evolence.co.ke',
    accent: '#212EA0',
  },
  {
    id: 2,
    photo: ctoPhoto,
    initials: 'FOO',
    name: 'Frankline Owino Owuor',
    title: 'Co-Founder & Chief Technology Officer',
    tag: 'CTO',
    bio: 'Oversees backend infrastructure, custom API integrations, and technical architecture. Specialises in designing robust automations using modern low-code and open-source engines, driving the implementation of the proprietary Ajubo AI framework. Focuses on building secure, invisible background workflows that automate manual operations cleanly at scale.',
    linkedin: 'https://www.linkedin.com/in/frankline-owuor-7916521bb/',
    email: 'frankline@evolence.co.ke',
    accent: '#1e3a8a',
  },
]

const Team = () => {
  return (
    <section className='team' id='team'>
      <div className='team-desc-wrap'>
        <p className='team-desc'>
          A partnership focused on your growth. 
          We combine user-centered design with advanced AI automation to give your business total operational clarity.
        </p>
      </div>

      <div className='team-grid'>
        {founders.map((f) => (
          <div className='team-card' key={f.id}>

            {/* Photo or avatar */}
            <div className='team-photo-wrap'>
              {f.photo ? (
                <img src={f.photo} 
                alt={`${f.name}, ${f.title} at Evolence`} 
                className='team-photo' 
                loading='lazy'
                style={f.id === 1 ? { objectPosition: 'center 40%' } : { objectPosition: 'center top' }}
                />
              ) : (
                <div className='team-avatar' style={{ background: f.accent }}>
                  <span>{f.initials}</span>
                </div>
              )}
              <span className='team-tag' style={{ background: f.accent }}>{f.tag}</span>
            </div>

            {/* Info */}
            <div className='team-info'>
              <h3 className='team-name'>{f.name}</h3>
              <p className='team-role'>{f.title}</p>
              <p className='team-bio'>{f.bio}</p>

              {/* Links */}
              <div className='team-links'>
                <a
                  href={f.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='team-link'
                  aria-label='LinkedIn'
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className='team-link'
                  aria-label='Email'
                >
                  <HiOutlineMail />
                  <span>{f.email}</span>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Team