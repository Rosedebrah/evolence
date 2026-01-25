import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Services from './Components/Navbar/Services/Services'
import Title from './Components/Navbar/Title/Title'
import About from './Components/About/About'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subTitle='Our SERVICES' title='What We Offer'/>
        <Services/>
        <About/>
        <Title subTitle='Our PROJECTS' title='Some of the projects we have worked on'/>
      </div>
    </div>
  )
}

export default App
