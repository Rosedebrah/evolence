import React from 'react'
import './Projects.css'
import white_arrow from '../../assets/white-arrow.png'

const projects = [
  {
    num: '00',
    title: 'Evolence Website',
    desc: 'The official Evolence consultancy website showcasing services, projects, and client reviews.',
    stack: ['React', 'Vite', 'MongoDB', 'Express.js', 'Node.js'],
    url: 'https://evolence.vercel.app',
    label: 'evolence.vercel.app',
  },
  {
    num: '01',
    title: 'Dessert Duo',
    desc: 'A bakery web app where customers can browse the menu and place orders online.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://dessertduo.netlify.app',
    label: 'dessertduo.netlify.app',
  },
  {
    num: '02',
    title: 'Personal Portfolio',
    desc: 'A personal developer portfolio featuring projects, skills, certifications, and social links.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://rosedebrah.co.ke',
    label: 'rosedebrah.co.ke',
  },
  {
    num: '03',
    title: 'Emerge — Therapy Booking',
    desc: 'A therapy booking app with authentication, session scheduling, and client management.',
    stack: ['React', 'Vite', 'Django'],
    url: 'https://emerge-e9bz-q0msh7luu-rosedebras-projects.vercel.app/login',
    label: 'View App',
  },
]

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.num}>
            <div className="pc-accent" />
            <div className="pc-body">
              <span className="pc-num">Project {p.num}</span>
              <h3 className="pc-title">{p.title}</h3>
              <p className="pc-desc">{p.desc}</p>
              <div className="pc-stack">
                {p.stack.map((tag) => (
                  <span className="pc-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noreferrer" className="pc-link">
                ↗ {p.label}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-btn">
        <button className="btn dark-btn">
          See More Here <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Projects