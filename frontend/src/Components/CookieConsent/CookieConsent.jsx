import React, { useState, useEffect } from 'react'
import './CookieConsent.css'
import { loadAnalytics } from '../../utils/analytics'
import { Link } from 'react-router-dom'

const CONSENT_KEY = 'evolence-cookie-consent'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY)
    if (saved === 'accepted') {
      loadAnalytics()
    } else if (!saved) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadAnalytics()
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cc-banner">
      <div className="cc-content">
        <p>
          We use cookies to understand site traffic through Google Analytics.
          No data is collected until you accept. See our{' '}
          <Link to="/cookies">Cookie Policy</Link> for details.
        </p>
        <div className="cc-actions">
          <button className="cc-btn cc-reject" onClick={handleReject}>
            Reject
          </button>
          <button className="cc-btn cc-accept" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent