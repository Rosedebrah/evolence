import React from 'react'
import './Stake.css'

const painPoints = [
  {
    label: 'PAIN POINT 01',
    title: 'Lost in Paperwork',
    text: 'Searching through paper registers or scattered spreadsheets for one missing record.',
  },
  {
    label: 'PAIN POINT 02',
    title: 'Doing It Twice',
    text: 'Re-entering the same data twice because your tools do not talk to each other.',
  },
  {
    label: 'PAIN POINT 03',
    title: 'Scattered Records',
    text: "Chasing a report that lives only in someone's personal notebook or WhatsApp chat.",
  },
]

const Stake = () => {
  return (
    <div className="stake">
      <div className="stake-inner">
        <h2 className="stake-heading">Still Running Things This Way?</h2>
        <p className="stake-sub">
          Every hour spent on manual admin is an hour you are not spending on
          the students, clients, or growth that actually matter.
        </p>

        <div className="stake-points">
          {painPoints.map((p, i) => (
            <div className="stake-card" key={i}>
              <span className="stake-card-label">{p.label}</span>
              <h3 className="stake-card-title">{p.title}</h3>
              <p className="stake-card-text">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="stake-bridge">Here is how we fix that for good.</p>
      </div>
    </div>
  )
}

export default Stake