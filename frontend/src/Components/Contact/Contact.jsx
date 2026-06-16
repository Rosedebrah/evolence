import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { ENDPOINTS } from '../../config/api'
import { FaInstagram, FaTiktok, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const SOCIALS = [
  {
    label: '',
    href: 'https://www.instagram.com/_evolence',
    icon: <FaInstagram />,
    className: 'social-link',
  },
  {
    label: '',
    href: 'https://www.tiktok.com/@.evolence',
    icon: <FaTiktok />,
    className: 'social-link',
  },
  {
    label: '',
    href: 'https://www.linkedin.com/company/evolence-ke',
    icon: <FaLinkedinIn />,
    className: 'social-link',
  },
  {
    label: '',
    href: 'https://wa.me/254100558454',
    icon: <FaWhatsapp />,
    className: 'social-link social-whatsapp',
  },
]

const Contact = () => {
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending…')
    setError('')

    const formData = new FormData(event.target)
    const name    = formData.get('name')
    const phone   = formData.get('phone')
    const message = formData.get('message')

    // ── 1. Send email via Web3Forms ──
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)

    try {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const web3Data = await web3Res.json()

      if (!web3Data.success) {
        console.error('Web3Forms error:', web3Data)
        setError(web3Data.message || 'Failed to send message.')
        setResult('')
        return
      }
    } catch (err) {
      console.error('Web3Forms network error:', err)
      setError('Could not send message. Please try again.')
      setResult('')
      return
    }

    // ── 2. Save to MongoDB ──
    try {
      const dbRes = await fetch(ENDPOINTS.contact, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      })
      if (!dbRes.ok) {
        console.error('DB save failed:', await dbRes.json())
      }
    } catch (err) {
      console.error('DB network error:', err)
    }

    // ── 3. Success ──
    setResult('Message sent! We will be in touch soon.')
    event.target.reset()
  }

  return (
    <><div className='contact'>
      <div className="contact-col">
        <h3>
          Send us a message{' '}
          <img src={msg_icon} alt="message icon" width={28} height={28} />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          details below. Your feedback, questions, and suggestions are important
          to us as we strive to provide exceptional service to our community.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="email" width={20} height={20} />
            info@evolence.ke
          </li>
          <li>
            <img src={phone_icon} alt="phone" width={20} height={20} />
            +254 100 558454
          </li>
          <li>
            <img src={location_icon} alt="location" width={20} height={20} />
            Nairobi, Kenya
          </li>
        </ul>

        {/* ── Social Links ── */}
        <div className="contact-socials">
          {SOCIALS.map(({ label, href, icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              aria-label={`Evolence on ${label}`}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
    </div><div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required />
          <button type="submit" className="btn dark-btn">
            Submit now{' '}
            <img src={white_arrow} alt="" width={16} height={16} />
          </button>
        </form>
        {result && <span className="contact-result success">{result}</span>}
        {error && <span className="contact-result error">{error}</span>}
      </div>
    </div>
    </>
  )
}

export default Contact