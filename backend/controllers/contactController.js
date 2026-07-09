import Contact from '../models/Contact.js'

// POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body

    // company and budget are optional — everything else is required
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ message: 'Please fill in all required fields' })
    }

    const entry = await Contact.create({
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    })

    res.status(201).json({
      message: 'Message received! We will be in touch soon.',
      entry,
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}