import React from 'react'
import LegalPage from './LegalPage'

const CookiePolicy = () => (
  <LegalPage
    title="Cookie Policy"
    effectiveDate="3 August 2026"
    metaDescription="How Evolence uses cookies and similar technologies on this website."
    path="/cookies"
  >
    <p>
      This Cookie Policy explains how Evolence uses cookies and similar technologies on
      evolence.co.ke.
    </p>

    <h2>What Are Cookies</h2>
    <p>
      Cookies are small text files stored on your device by your browser. They can be used
      to remember information about your visit, such as your preferences, or to enable
      certain site functionality.
    </p>

    <h2>What We Currently Use</h2>
    <p>
      Evolence does not currently use analytics, advertising, or third-party tracking
      cookies on this website. We do not run tools like Google Analytics or Meta Pixel at
      this time. Any cookies or local storage currently in use are strictly functional —
      for example, remembering that you have already submitted a form, so we do not show
      you a duplicate confirmation message.
    </p>

    <h2>Third-Party Content</h2>
    <p>
      Our contact form is processed through Web3Forms, a third-party form-handling service,
      which may set its own cookies as part of submitting your message securely. We do not
      control these cookies directly — you can review Web3Forms' own privacy practices on
      their website.
    </p>

    <h2>Managing Cookies</h2>
    <p>
      Most browsers let you view, manage, and delete cookies through their settings. Since
      this site does not rely on tracking or advertising cookies, blocking cookies in your
      browser should not affect your ability to browse or use the site, though it may
      affect some form-related functionality.
    </p>

    <h2>Changes to This Policy</h2>
    <p>
      If we add analytics or other tracking tools in the future, we will update this policy
      to reflect exactly what is in use and why.
    </p>

    <h2>Contact Us</h2>
    <p>
      Questions about this policy can be sent to{' '}
      <a href="mailto:info@evolence.co.ke">info@evolence.co.ke</a>.
    </p>
  </LegalPage>
)

export default CookiePolicy