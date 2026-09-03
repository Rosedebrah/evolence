import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 550)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenu(false)
  }, [location.pathname])

  const handleNavClick = (section, offset = -260) => {
    if (isHome) return
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const NavItem = ({ to, offset = -260, label, isButton = false }) => {
    if (isHome) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          offset={offset}
          duration={500}
          onClick={() => setMobileMenu(false)}
        >
          {isButton ? (
            <button className="btn hero-btn-primary">
              {label} <FiPhoneCall className="btn-icon" />
            </button>
          ) : label}
        </ScrollLink>
      )
    }
    return (
      <RouterLink
        to={`/#${to}`}
        onClick={() => { setMobileMenu(false); handleNavClick(to) }}
      >
        {isButton ? (
          <button className="btn hero-btn-primary">
            {label} <FiPhoneCall className="btn-icon" />
          </button>
        ) : label}
      </RouterLink>
    )
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img src={logo} alt="Evolence logo" className="logo" />
      </RouterLink>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><NavItem to="hero" offset={0} label="Home" /></li>
        <li><NavItem to="services" offset={-260} label="Services" /></li>
        <li><NavItem to="about" offset={-150} label="About Us" /></li>
        <li><NavItem to="projects" offset={-260} label="Our Projects" /></li>
        <li><NavItem to="reviews" offset={-260} label="Reviews" /></li>
        <li><NavItem to="team" offset={-260} label="Our Team" /></li>
        <li><NavItem to="contact" offset={-260} label="Book a Free Call" isButton /></li>
      </ul>

      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      />
    </nav>
  )
}

export default Navbar