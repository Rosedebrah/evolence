import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    service: {
      type: String,
      required: true,
      enum: [
        'School & SME Digitisation',
        'Automation & Ops Support',
        'Excel & Data Training',
        'UI/UX & MVP Design',
        'Branding',
        'Printing',
      ],
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true, trim: true },
    approved: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('Review', reviewSchema)