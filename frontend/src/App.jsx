import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Reviews from './Components/Reviews/Reviews'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ServicePage from './Components/ServicePage/ServicePage'
import Team from './Components/Team/Team'
import SEO from './Components/seo'
import Stake from './Components/Stake/Stake'
import Plan from './Components/Plan/Plan'
import Faq from './Components/Faq/Faq'
// ── Home page layout ──────────────────────────────────────────────
const Home = () => (
  <>
    <SEO
      title="Evolence — School & SME Digitisation, Automation & Design | Nairobi"
      description="Evolence helps schools, SMEs, and founder-led teams in Nairobi digitise records, automate workflows, and design user-ready digital systems. Book a free call."
      path="/"
    />
    <Hero />
    <Stake />
    <div className="container">
      <Title subTitle="Our SERVICES" title="What We Offer" />
      <Services />
      <Plan />
      <About />
      <Title subTitle="Our PROJECTS" title="Some of the projects we have worked on" />
      <Projects />
      <Title subTitle="REVIEWS" title="What Our Clients Say" />
      <Reviews />
      <Title subTitle="THE PEOPLE BEHIND THE WORK" title="Meet the Co-Founders" />
      <Team />
      <Faq />
      <Title subTitle="CONTACT US" title="Get In Touch" />
      <Contact />
      <Footer />
    </div>
  </>
)

// ── App ───────────────────────────────────────────────────────────
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App