import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Services from './Components/Navbar/Services/Services'
import Title from './Components/Navbar/Title/Title'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subTitle='Our SERVICES' title='What We Offer'/>
        <Services/>
        <About/>
        <Title subTitle='Our PROJECTS' 
        title='Some of the projects we have worked on'/>
        <Projects/>
        <Title subTitle='REVIEWS' title='What Our Clients Say'/>
        <Reviews/>
        <Title subTitle='CONTACT US' title='Get In Touch'/>
        <Contact/>
        <Footer/>

      </div>
    </div>
  )
}

export default App
