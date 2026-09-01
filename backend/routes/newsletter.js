import express from 'express'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import Subscriber from '../models/Subscriber.js'

const router = express.Router()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ── POST /api/newsletter/subscribe ──
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' })
    }

    const existing = await Subscriber.findOne({ email: email.toLowerCase() })
    if (existing) {
      if (existing.active) {
        return res.status(200).json({ message: 'You are already subscribed!' })
      }
      existing.active = true
      await existing.save()
      return res.status(200).json({ message: 'Welcome back!' })
    }

    const unsubscribeToken = crypto.randomBytes(24).toString('hex')
    await Subscriber.create({ email: email.toLowerCase(), unsubscribeToken })

    res.status(201).json({ message: 'Subscribed successfully!' })
  } catch (err) {
    console.error('Subscribe error:', err)
    res.status(500).json({ message: 'Something went wrong. Please try again.' })
  }
})

// ── GET /api/newsletter/unsubscribe?token=... ──
router.get('/unsubscribe', async (req, res) => {
  try {
    const { token } = req.query
    const subscriber = await Subscriber.findOne({ unsubscribeToken: token })
    if (!subscriber) return res.status(404).send('Invalid or expired unsubscribe link.')

    subscriber.active = false
    await subscriber.save()
    res.send('You have been unsubscribed. Sorry to see you go!')
  } catch (err) {
    console.error('Unsubscribe error:', err)
    res.status(500).send('Something went wrong.')
  }
})

// ── POST /api/newsletter/send (admin only) ──
router.post('/send', async (req, res) => {
  try {
    const { adminKey, subject, html } = req.body

    if (adminKey !== process.env.NEWSLETTER_ADMIN_KEY) {
      return res.status(401).json({ message: 'Unauthorized.' })
    }
    if (!subject || !html) {
      return res.status(400).json({ message: 'Subject and content are required.' })
    }

    const subscribers = await Subscriber.find({ active: true })
    if (subscribers.length === 0) {
      return res.status(200).json({ message: 'No active subscribers to send to.' })
    }

    let sent = 0
    let failed = 0

    for (const sub of subscribers) {
      const unsubscribeUrl = `${process.env.SITE_URL}/api/newsletter/unsubscribe?token=${sub.unsubscribeToken}`
      try {
        await transporter.sendMail({
          from: `"Evolence" <${process.env.SMTP_USER}>`,
          to: sub.email,
          subject,
          html: `${html}<hr style="margin-top:32px;border:none;border-top:1px solid #eee;"/><p style="font-size:12px;color:#888;">You're receiving this because you subscribed at evolence.co.ke. <a href="${unsubscribeUrl}">Unsubscribe</a></p>`,
        })
        sent++
      } catch (err) {
        console.error(`Failed to send to ${sub.email}:`, err.message)
        failed++
      }
    }

    res.status(200).json({ message: `Sent to ${sent} subscribers. ${failed} failed.` })
  } catch (err) {
    console.error('Send error:', err)
    res.status(500).json({ message: 'Something went wrong while sending.' })
  }
})

export default router