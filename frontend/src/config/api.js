const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const ENDPOINTS = {
  reviews: `${API_URL}/api/reviews`,
  contact: `${API_URL}/api/contact`,
}