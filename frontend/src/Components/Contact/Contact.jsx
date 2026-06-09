import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { ENDPOINTS } from '../../config/api'

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

    // ── 1. Send email via Web3Forms (keeps your inbox notifications) ──
    formData.append('access_key', '495d6115-70f1-4c62-9d0a-fe54aab5f931')

    try {
      const web3Res  = await fetch('https://api.web3forms.com/submit', {
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

    // ── 2. Save to MongoDB via your backend ──
    try {
      const dbRes = await fetch(ENDPOINTS.contact, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      })

      if (!dbRes.ok) {
        // Don't block the user — email already sent, just log the DB failure
        console.error('DB save failed:', await dbRes.json())
      }
    } catch (err) {
      // Same — email sent successfully so don't show an error to the user
      console.error('DB network error:', err)
    }

    // ── 3. Success ──
    setResult('Message sent! We will be in touch soon.')
    event.target.reset()
  }

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=''/></h3>
        <p>
          Feel free to reach out through the contact form or find our contact details
          below. Your feedback, questions, and suggestions are important to us as we
          strive to provide exceptional service to our community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" /> info@evolence.ke</li>
          <li><img src={phone_icon} alt="" /> +254 111 550163</li>
          <li><img src={location_icon} alt="" /> Nairobi, Kenya</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt=""/>
          </button>
        </form>

        {result && <span className="contact-result success">{result}</span>}
        {error  && <span className="contact-result error">{error}</span>}
      </div>
    </div>
  )
}

export default Contact