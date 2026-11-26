import React from 'react'
import LegalPage from './LegalPage'

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    effectiveDate="3 August 2026"
    metaDescription="How Evolence collects, uses, and protects your personal data."
    path="/privacy"
  >
    <p>
      Evolence ("we," "us," "our") is committed to protecting your privacy in line with
      Kenya's Data Protection Act, 2019. This policy explains what information we collect
      through evolence.co.ke, why we collect it, and how we handle it.
    </p>

    <h2>Information We Collect</h2>
    <p>We collect information you provide directly to us, including:</p>
    <ul>
      <li>Contact form submissions — name, email, phone number, company name, service of interest, budget range, and your message</li>
      <li>Newsletter subscriptions — your email address</li>
      <li>Client reviews — name, title, company, service received, rating, and review text, if you choose to submit one</li>
    </ul>
    <p>
      We do not use analytics, advertising, or third-party tracking tools on this site, and
      we do not collect information passively through cookies beyond what is strictly
      necessary for the site to function (see our <a href="/cookies">Cookie Policy</a>).
    </p>

    <h2>How We Use Your Information</h2>
    <ul>
      <li>To respond to your enquiries and discuss potential projects</li>
      <li>To send newsletters or updates, only if you have subscribed, and only until you unsubscribe</li>
      <li>To display client reviews publicly on our site, if you submit one</li>
      <li>To improve our services based on the enquiries and feedback we receive</li>
    </ul>

    <h2>How We Store Your Information</h2>
    <p>
      Contact form submissions, newsletter subscriptions, and reviews are stored securely in
      our database. Contact form submissions are also sent to our team via email at the time
      of submission. We retain this information only for as long as necessary to respond to
      your enquiry, maintain our newsletter list, or display your review, unless you ask us
      to delete it sooner.
    </p>

    <h2>Sharing Your Information</h2>
    <p>
      We do not sell, rent, or trade your personal information to third parties. We do not
      process payments through this website, so no payment or financial information is
      collected here. Any project billing is handled directly and separately from the website.
    </p>

    <h2>Your Rights</h2>
    <p>Under the Data Protection Act, 2019, you have the right to:</p>
    <ul>
      <li>Ask us what personal data we hold about you</li>
      <li>Ask us to correct inaccurate data</li>
      <li>Ask us to delete your data, including unsubscribing from our newsletter or removing a submitted review</li>
      <li>Object to how we are using your data</li>
    </ul>
    <p>
      To exercise any of these rights, email us at{' '}
      <a href="mailto:info@evolence.co.ke">info@evolence.co.ke</a>.
    </p>

    <h2>Changes to This Policy</h2>
    <p>
      We may update this policy from time to time. Changes will be posted on this page with
      an updated effective date.
    </p>

    <h2>Contact Us</h2>
    <p>
      If you have questions about this policy, reach us at{' '}
      <a href="mailto:info@evolence.co.ke">info@evolence.co.ke</a> or +254 100 558454.
    </p>
  </LegalPage>
)

export default PrivacyPolicy