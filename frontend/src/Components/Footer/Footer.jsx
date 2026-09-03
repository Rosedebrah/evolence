import React, { useState } from 'react'
import './Footer.css'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleSubscribe = (e) => {
    e.preventDefault()
    // hook this up to your existing contact/newsletter endpoint later
    setSubscribed(true)
    setEmail('')
  }

  const goToSection = (section) => {
    if (isHome) return
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const FooterLink = ({ to, label }) =>
    isHome ? (
      <ScrollLink to={to} smooth={true} offset={-260} duration={500}>{label}</ScrollLink>
    ) : (
      <RouterLink to={`/#${to}`} onClick={() => goToSection(to)}>{label}</RouterLink>
    )

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Evolence logo" className="footer-logo" />
          <p className="footer-tagline">
            Digitisation, automation, design, and training for schools,
            SMEs, and founder-led teams in Nairobi.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com/company/evolence" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://instagram.com/evolence" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/254100558454" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><RouterLink to="/services/digitisation">Digitisation</RouterLink></li>
            <li><RouterLink to="/services/automation">Automation & Ops</RouterLink></li>
            <li><RouterLink to="/services/training">Excel & Data Training</RouterLink></li>
            <li><RouterLink to="/services/development">Design & Development</RouterLink></li>
            <li><RouterLink to="/services/branding">Branding & Print</RouterLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><FooterLink to="about" label="About Us" /></li>
            <li><FooterLink to="projects" label="Our Projects" /></li>
            <li><FooterLink to="reviews" label="Reviews" /></li>
            <li><FooterLink to="team" label="Our Team" /></li>
            <li><FooterLink to="faq" label="FAQs" /></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Occasional updates on our work — no spam, unsubscribe anytime.</p>
          {subscribed ? (
            <p className="footer-subscribed">✓ Thanks, you're on the list!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-form">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Evolence. All rights reserved.</p>
        <div className="footer-legal">
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
          <RouterLink to="/terms">Terms of Service</RouterLink>
          <RouterLink to="/cookies">Cookie Policy</RouterLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer