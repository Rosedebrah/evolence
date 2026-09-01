import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import reviewRoutes from './routes/reviews.js'
import contactRoutes from './routes/contact.js'
import newsletterRoutes from './routes/newsletter.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors({
  origin: [
    'https://evolence.co.ke',
    'https://www.evolence.co.ke',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}))

app.use(express.json())

// Routes
app.use('/api/reviews', reviewRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)

app.get('/api', (req, res) => res.send('Evolence API is running flawlessly!'))
app.get('/', (req, res) => res.send('Evolence API is running flawlessly!'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))