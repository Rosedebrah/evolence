import React from 'react'
import './Plan.css'
import { Link } from 'react-scroll'
import { FiPhoneCall } from 'react-icons/fi'

const steps = [
  {
    label: 'STEP 01',
    title: 'Book a Free Call',
    detail: 'Tell us what is slowing you down. Whether it is paper records, manual reports or a website that is not pulling its weight.',
  },
  {
    label: 'STEP 02',
    title: 'Get a Simple Plan',
    detail: 'We map out exactly what we will build, how long it will take, and what it will cost you. In plain language.',
  },
  {
    label: 'STEP 03',
    title: 'We Build, You Grow',
    detail: 'Sit back while we handle design, development, migration, and training. From start to finish.',
  },
]

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan-inner">
        <h2 className="plan-heading">It Is Simpler Than You Think</h2>
        <p className="plan-sub">
          No long onboarding and no confusing tech jargon. Just three steps
          between where you are now and a system that actually works.
        </p>

        <div className="plan-steps">
          {steps.map((s, i) => (
            <div className="plan-card" key={i}>
              <span className="plan-card-label">{s.label}</span>
              <h3 className="plan-card-title">{s.title}</h3>
              <p className="plan-card-text">{s.detail}</p>
            </div>
          ))}
        </div>

        <Link to="contact" smooth={true} offset={-260} duration={500}>
          <button className="btn plan-cta">
            Book a Free Call <FiPhoneCall className="btn-icon" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Plan