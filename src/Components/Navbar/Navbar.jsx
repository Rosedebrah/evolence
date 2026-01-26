import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';


const Navbar = () => {

    const[sticky, setSticky]=useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 550 ? setSticky(true) : setSticky(false);
      })
    },[])


  return (
    <nav className={`container ${sticky? 'dark-nav' : '' }`}>
        <img src={logo} alt="" className='logo' />
        <ul>
          <li><Link to='hero' smooth={true} offset={0} suration={500}>Home</Link></li>
          <li><Link to='services' smooth={true} offset={-260} suration={500}>Services</Link></li>
          <li><Link to='about' smooth={true} offset={-150} suration={500}>About Us</Link></li>
          <li><Link to='reviews' smooth={true} offset={-260} suration={500}>Reviews</Link></li>
          <li><Link to='projects' smooth={true} offset={-260} suration={500}>Our Projects</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} suration={500}><button className='btn'>Contact Us</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
