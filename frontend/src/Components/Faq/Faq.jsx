import React, { useState } from 'react'
import './Faq.css'

const faqs = [
  {
    q: 'What is Evolence?',
    a: 'Evolence is a Nairobi-based studio that helps schools, SMEs, and founder-led teams replace paper-based, manual processes with clean digital systems — through digitisation, automation, web development, training, and branding.',
  },
  {
    q: 'What services does Evolence offer?',
    a: 'Five core services: School & SME Digitisation, Automation & Ops Support, Excel & Data Training, UI/UX & Full-Stack Development, and Branding & Print — each available as its own project or bundled together.',
  },
  {
    q: 'Is Evolence a good fit for a small school or business?',
    a: 'Yes — our Basic tier on every service is built specifically for small shops, local academies, and solopreneurs who need real digital systems without enterprise-level cost or complexity.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free call. We will talk through what is slowing your team down, then send you a simple, itemised plan before you commit to anything.',
  },
  {
    q: 'Do you provide support after a project launches?',
    a: 'Every tier includes a defined support window after launch, and our Pro/Advanced tiers include ongoing priority SLA support for teams that want a longer-term partner rather than a one-off project.',
  },
  {
    q: 'Can Evolence work with the systems we already use?',
    a: 'Yes — we design around your existing tools wherever possible, connecting spreadsheets, CRMs, and communication platforms rather than forcing you to abandon what already works.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope — a Basic digitisation project can take as little as two weeks, while a full Pro-tier system or product build can run several months. We give you a realistic timeline during the planning stage, before any work begins.',
  },
  {
    q: 'Where is Evolence based, and do you work with clients outside Nairobi?',
    a: 'We are based in Nairobi, Kenya, and work with schools and businesses across the country — with most of our process designed to work smoothly remotely, so location is rarely a barrier.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq" id="faq">
      <div className="faq-inner">
        <span className="faq-eyebrow">GOOD TO KNOW</span>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-sub">
          Everything you need to know before booking a call — if your
          question is not here, just ask us directly.
        </p>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-toggle">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq