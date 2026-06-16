import { useParams, Link, Navigate } from 'react-router-dom'
import { servicesData } from '../Services/Services'
import Footer from '../Footer/Footer'
import './ServicePage.css'

const ServicePage = () => {
  const { slug } = useParams()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/" replace />

  const currentIndex = servicesData.findIndex((s) => s.slug === slug)
  const prev = servicesData[currentIndex - 1] || null
  const next = servicesData[currentIndex + 1] || null

  return (
    <div className="sp-root">

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
          <h2 className="sp-section-label">Overview</h2>
          <p className="sp-description">{service.description}</p>
        </section>

        <section className="sp-section sp-features">
          <h2 className="sp-section-label">What's Included</h2>
          <ul className="sp-feature-list">
            {service.features.map((f, i) => (
              <li key={i}>
                <span className="sp-arrow">→</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="sp-section sp-process">
          <h2 className="sp-section-label">How It Works</h2>
          <div className="sp-steps">
            {service.process.map((p, i) => (
              <div className="sp-step" key={i}>
                <div className="sp-step-number">{p.step}</div>
                <div className="sp-step-content">
                  <h3>{p.title}</h3>
                  <p>{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing Tiers ── */}
        {service.tiers && (
          <section className="sp-section sp-tiers">
            <h2 className="sp-section-label">Pricing Tiers</h2>
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
          <Link to="/#contact" className="sp-cta-btn">Book a Free Consultation</Link>
        </section>

      </div>

      {/* ── Prev / Next ── */}
      <div className="sp-service-nav sp-container">
        {prev ? (
          <Link to={`/services/${prev.slug}`} className="sp-nav-link sp-nav-prev">
            <span className="sp-nav-dir">← Previous</span>
            <span className="sp-nav-name">{prev.shortTitle}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/services/${next.slug}`} className="sp-nav-link sp-nav-next">
            <span className="sp-nav-dir">Next →</span>
            <span className="sp-nav-name">{next.shortTitle}</span>
          </Link>
        ) : <div />}
      </div>

      {/* ── Footer ── */}
      <Footer />

    </div>
  )
}

export default ServicePage