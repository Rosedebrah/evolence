import React, { useState } from 'react'
import './Plan.css'
import { Link } from 'react-scroll'
import { FiPhoneCall, FiChevronDown } from 'react-icons/fi'

const steps = [
  {
    label: 'STEP 01',
    title: 'Book a Free Call',
    detail: 'Tell us what is slowing you down — paper records, manual reports, a website that is not pulling its weight.',
    expanded: 'We start by understanding your school or business — the records, workflows, and goals that matter most. No obligation, just a conversation.',
  },
  {
    label: 'STEP 02',
    title: 'Get a Simple Plan',
    detail: 'We map out exactly what we will build, how long it will take, and what it costs — in plain language.',
    expanded: 'This includes a research and audit phase: we dig into your current processes to find where time and data are actually being lost, then recommend the right tools and approach for your specific situation — not a generic template.',
  },
  {
    label: 'STEP 03',
    title: 'We Build, You Grow',
    detail: 'Sit back while we handle design, development, migration, and training — start to finish.',
    expanded: 'We design and build using modern, maintainable tools, testing continuously so what you get works the first time. After launch, we stay on for hands-on training and a defined support window, so adoption actually sticks.',
  },
]

const Plan = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="plan">
      <div className="plan-inner">
        <h2 className="plan-heading">It Is Simpler Than You Think</h2>
        <p className="plan-sub">
          No long onboarding, no confusing tech jargon — just three steps
          between where you are now and a system that actually works.
        </p>

        <div className="plan-steps">
          {steps.map((s, i) => (
            <div className="plan-card" key={i}>
              <span className="plan-card-label">{s.label}</span>
              <h3 className="plan-card-title">{s.title}</h3>
              <p className="plan-card-text">{s.detail}</p>

              <button
                className="plan-more-btn"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {openIndex === i ? 'Show less' : 'More detail'}
                <FiChevronDown className={`plan-more-icon ${openIndex === i ? 'open' : ''}`} />
              </button>

              {openIndex === i && (
                <p className="plan-card-expanded">{s.expanded}</p>
              )}
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