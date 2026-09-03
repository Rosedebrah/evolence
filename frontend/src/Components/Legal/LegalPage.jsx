import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import SEO from '../seo'
import './LegalPage.css'

const LegalPage = ({ title, effectiveDate, metaDescription, path, children }) => {
  return (
    <div className="legal-root">
      <SEO
        title={`${title} | Evolence`}
        description={metaDescription}
        path={path}
      />
      <div className="legal-container">
        <Link to="/" className="legal-back">← Back to Home</Link>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Effective date: {effectiveDate}</p>
        <div className="legal-body">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LegalPage