import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import reviewRoutes from './routes/reviews.js'
import contactRoutes from './routes/contact.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://evolence.vercel.app',
  ],
    
     // your Vite dev URL — update to your live URL before deploying
  methods: ['GET', 'POST'],
}))
app.use(express.json())

app.use('/api/reviews', reviewRoutes)
app.use('/api/contact', contactRoutes)

app.get('/', (req, res) => res.send('Evolence API is running'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))