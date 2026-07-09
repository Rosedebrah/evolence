import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    service: {
      type: String,
      required: true,
      trim: true,
      enum: [
        'school-sme-digitisation',
        'automation-ops-support',
        'excel-data-training',
        'uiux-mvp-design',
        'branding',
        'printing',
        'other',
      ],
    },
    budget: {
      type: String,
      trim: true,
      enum: ['under-25k', '25k-75k', '75k-150k', '150k-plus', 'not-sure', ''],
    },
    message: { type: String, required: true, trim: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('Contact', contactSchema)