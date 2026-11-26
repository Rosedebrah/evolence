import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall, FiHome } from 'react-icons/fi'
import Footer from '../Footer/Footer'
import SEO from '../seo'
import './NotFound.css'

const popularLinks = [
  { label: 'School & SME Digitisation', to: '/services/digitisation' },
  { label: 'Automation & Ops Support', to: '/services/automation' },
  { label: 'Design & Development', to: '/services/development' },
  { label: 'Excel & Data Training', to: '/services/training' },
]

const NotFound = () => {
  return (
    <div className="nf-root">
      <SEO
        title="Page Not Found | Evolence"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />

      <div className="nf-container">
        <span className="nf-code">404</span>
        <h1 className="nf-heading">This Page Went Missing</h1>
        <p className="nf-sub">
          The page you are looking for may have been moved, renamed, or
          never existed. Let us help you find what you actually need.
        </p>

        <div className="nf-actions">
          <Link to="/" className="btn nf-btn-primary">
            <FiHome className="btn-icon" /> Back to Home
          </Link>
          <Link to="/#contact" className="btn nf-btn-secondary">
            Book a Free Call <FiPhoneCall className="btn-icon" />
          </Link>
        </div>

        <div className="nf-links">
          <span className="nf-links-label">Or explore our services</span>
          <div className="nf-links-grid">
            {popularLinks.map((link, i) => (
              <Link to={link.to} className="nf-link-card" key={i}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound