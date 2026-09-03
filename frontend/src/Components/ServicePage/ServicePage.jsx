import { useParams, Link, Navigate } from 'react-router-dom'
import { servicesData } from '../Services/Services'
import Footer from '../Footer/Footer'
import './ServicePage.css'
import SEO from '../seo'
import { FiPhoneCall, FiArrowRight, FiArrowLeft } from 'react-icons/fi'


const ServicePage = () => {
  const { slug } = useParams()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/404" replace />

  const currentIndex = servicesData.findIndex((s) => s.slug === slug)
  const prev = servicesData[currentIndex - 1] || null
  const next = servicesData[currentIndex + 1] || null

  return (
    <div className="sp-root">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />
      {/* ── Hero ── */}
      <div className="sp-hero">
        {service.image && (
          <div className="sp-hero-img">
            <img src={service.image} alt={service.shortTitle} />
            <div className="sp-hero-overlay" />
          </div>
        )}
        <div className="sp-hero-content sp-container">
          <Link to="/" className="sp-back">← Back to Home</Link>
          <span className="sp-icon">{service.icon}</span>
          <h1 className="sp-title">{service.title}</h1>
          <p className="sp-tagline">{service.tagline}</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="sp-body sp-container">

        <section className="sp-section sp-overview">
          <span className="sp-eyebrow">OVERVIEW</span>
          <h2 className="sp-section-label">What This Service Covers</h2>
          {service.description.map((paragraph, i) => (
            <p className="sp-description" key={i}>{paragraph}</p>
          ))}
        </section>

        <section className="sp-section sp-features">
          <span className="sp-eyebrow">WHAT'S INCLUDED</span>
          <h2 className="sp-section-label">Everything You Get</h2>
          <div className="sp-feature-grid">
            {service.features.map((f, i) => (
              <div className="sp-feature-card" key={i}>
                <span className="sp-feature-number">{String(i + 1).padStart(2, '0')}</span>
                <p>{f}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sp-section sp-process">
          <span className="sp-eyebrow">HOW IT WORKS</span>
          <h2 className="sp-section-label">Our Process</h2>
          <div className="sp-steps">
            {service.process.map((p, i) => (
              <div className="sp-step-card" key={i}>
                <span className="sp-step-number">STEP {p.step}</span>
                <h3 className="sp-step-title">{p.title}</h3>
                <p className="sp-step-detail">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing Tiers ── */}
        {service.tiers && (
          <section className="sp-section sp-tiers">
            <span className="sp-eyebrow">PRICING</span>
            <h2 className="sp-section-label">Choose Your Tier</h2>
            <div className="sp-tiers-grid">
              {service.tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`sp-tier-card ${i === 1 ? 'sp-tier-card--featured' : ''}`}
                >
                  {i === 1 && (
                    <span className="sp-tier-badge">Most Popular</span>
                  )}
                  <div className="sp-tier-header">
                    <span className="sp-tier-name">{tier.name}</span>
                    <p className="sp-tier-target">{tier.target}</p>
                  </div>
                  <ul className="sp-tier-features">
                    {tier.features.map((f, j) => (
                      <li key={j}>
                        <span className="sp-tier-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/#contact" className="sp-tier-cta">
                    {i === 2 ? 'Talk to Us' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="sp-cta-section">
          <p>Ready to get started?</p>
          <Link to="/#contact" className="sp-cta-btn">
            Book a Free Call <FiPhoneCall className="btn-icon" />
          </Link>
        </section>

      </div>

      {/* ── Prev / Next ── */}
      <div className="sp-service-nav sp-container">
        {prev ? (
          <Link to={`/services/${prev.slug}`} className="sp-nav-link sp-nav-prev">
            <FiArrowLeft className="sp-nav-arrow" />
            <span>
              <span className="sp-nav-dir">Previous</span>
              <span className="sp-nav-name">{prev.shortTitle}</span>
            </span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/services/${next.slug}`} className="sp-nav-link sp-nav-next">
            <span>
              <span className="sp-nav-dir">Next</span>
              <span className="sp-nav-name">{next.shortTitle}</span>
            </span>
            <FiArrowRight className="sp-nav-arrow" />
          </Link>
        ) : <div />}
      </div>

      {/* ── Footer ── */}
      <Footer />

    </div>
  )
}

export default ServicePage