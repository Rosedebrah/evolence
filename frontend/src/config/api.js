const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const ENDPOINTS = {
  reviews: `${API_URL}/reviews`,
  contact: `${API_URL}/contact`,
}