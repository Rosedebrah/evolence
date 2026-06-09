import Review from '../models/Review.js'

// GET /api/reviews — fetch all approved reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 })
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// POST /api/reviews — submit a new review (pending approval)
export const createReview = async (req, res) => {
  try {
    const { name, title, company, service, rating, review } = req.body

    if (!name || !title || !company || !service || !rating || !review) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const newReview = await Review.create({
      name, title, company, service, rating, review,
    })

    res.status(201).json({
      message: 'Review submitted and pending approval. Thank you!',
      review: newReview,
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}