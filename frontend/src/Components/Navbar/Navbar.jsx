import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false)
  }, [location.pathname])

  // If on a service page, navigate home then scroll to section
  const handleNavClick = (section, offset = -260) => {
    if (isHome) return // let ScrollLink handle it
    navigate('/')
    // small delay lets the home page mount before scrolling
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
          {isButton ? <button className="btn">{label}</button> : label}
        </ScrollLink>
      )
    }
    // On service pages — go back to home with hash
    return (
      <RouterLink
        to={`/#${to}`}
        onClick={() => { setMobileMenu(false); handleNavClick(to) }}
      >
        {isButton ? <button className="btn">{label}</button> : label}
      </RouterLink>
    )
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <RouterLink to="/">
        <img src={logo} alt="KaziFlow AI" className="logo" />
      </RouterLink>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><NavItem to="hero" offset={0} label="Home" /></li>
        <li><NavItem to="services" offset={-260} label="Services" /></li>
        <li><NavItem to="about" offset={-150} label="About Us" /></li>
        <li><NavItem to="reviews" offset={-260} label="Reviews" /></li>
        <li><NavItem to="projects" offset={-260} label="Our Projects" /></li>
        <li><NavItem to="contact" offset={-260} label="Contact Us" isButton /></li>
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