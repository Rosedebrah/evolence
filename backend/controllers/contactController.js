import Contact from '../models/Contact.js'

// POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, phone, message } = req.body

    if (!name || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const entry = await Contact.create({ name, phone, message })

    res.status(201).json({
      message: 'Message received! We will be in touch soon.',
      entry,
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}