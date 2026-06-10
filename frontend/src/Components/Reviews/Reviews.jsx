import React, { useRef, useState, useEffect } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { ENDPOINTS } from '../../config/api'

const SERVICES = [
  'School & SME Digitisation',
  'Automation & Ops Support',
  'Excel & Data Training',
  'UI/UX & MVP Design',
  'Branding',
  'Printing',
]

const StarRating = ({ value, onChange }) => (
  <div className="star-input">
    {[1, 2, 3, 4, 5].map((n) => (
      <span
        key={n}
        className={`star ${n <= value ? 'lit' : ''}`}
        onClick={() => onChange(n)}
      >
        ★
      </span>
    ))}
  </div>
)

const Reviews = () => {
  const slider = useRef(null)
  const tx = useRef(0)

  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const [form, setForm] = useState({
    name: '', title: '', company: '',
    service: '', rating: 0, review: '',
  })
  const [errors, setErrors] = useState({})

  // ── Fetch reviews on mount ──
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(ENDPOINTS.reviews)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setReviews(data)
      } catch (err) {
        console.error('Could not load reviews:', err)
        setFetchError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  // ── Reset slider position when reviews load ──
  useEffect(() => {
    tx.current = 0
    if (slider.current) {
      slider.current.style.transform = `translateX(0px)`
    }
  }, [reviews])

  // ── Slider controls (pixel-based) ──
  const getSlideWidth = () => {
    if (!slider.current || !slider.current.children[0]) return 400
    return slider.current.children[0].offsetWidth
  }

  const slideForward = () => {
    if (!slider.current) return
    const slideWidth = getSlideWidth()
    const maxScroll = -(slider.current.scrollWidth - slider.current.parentElement.offsetWidth)
    tx.current = Math.max(tx.current - slideWidth, maxScroll)
    slider.current.style.transform = `translateX(${tx.current}px)`
  }

  const slideBackward = () => {
    if (!slider.current) return
    const slideWidth = getSlideWidth()
    tx.current = Math.min(tx.current + slideWidth, 0)
    slider.current.style.transform = `translateX(${tx.current}px)`
  }

  // ── Form handling ──
  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.title.trim())   e.title   = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.service)        e.service = 'Please select a service'
    if (form.rating === 0)    e.rating  = 'Please select a rating'
    if (!form.review.trim())  e.review  = 'Required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch(ENDPOINTS.reviews, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setSubmitError(data.message || 'Something went wrong. Please try again.')
        return
      }

      // Add new review to the top and show it immediately
      setReviews((prev) => [data.review, ...prev])
      setForm({ name: '', title: '', company: '', service: '', rating: 0, review: '' })
      setErrors({})
      setSubmitted(true)
      setShowForm(false)

      // Scroll back to start to show the new review
      tx.current = 0
      if (slider.current) {
        slider.current.style.transform = `translateX(0px)`
      }

    } catch (err) {
      console.error('Submit error:', err)
      setSubmitError('Could not connect to server. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="reviews-section">

      {/* ── Slider ── */}
      <div className="reviews">
        <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
        <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />

        <div className="slider">
          {loading && (
            <p className="reviews-status">Loading reviews…</p>
          )}
          {fetchError && (
            <p className="reviews-status">Could not load reviews right now.</p>
          )}
          {!loading && !fetchError && reviews.length === 0 && (
            <p className="reviews-status">No reviews yet — be the first!</p>
          )}
          {!loading && !fetchError && reviews.length > 0 && (
            <ul ref={slider}>
              {reviews.map((r) => (
                <li key={r._id}>
                  <div className="slide">
                    <div className="user-info">
                      <div className="user-initials">
                        {r.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3>{r.name}</h3>
                        <span>{r.title}{r.company ? `, ${r.company}` : ''}</span>
                      </div>
                    </div>
                    <div className="slide-meta">
                      <span className="slide-stars">
                        {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                      </span>
                      <span className="slide-service">{r.service}</span>
                    </div>
                    <p>{r.review}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="reviews-cta">
        {submitted && !showForm && (
          <p className="thanks-msg">✓ Thank you! Your review is now live.</p>
        )}
        <button
          className="add-review-btn"
          onClick={() => { setShowForm((v) => !v); setSubmitted(false) }}
        >
          {showForm ? '✕ Cancel' : '+ Leave a Review'}
          {!showForm && <img src={white_arrow} alt="" />}
        </button>
      </div>

      {/* ── Form ── */}
      {showForm && (
        <form className="review-form" onSubmit={handleSubmit} noValidate>
          <div className="rf-grid">

            <div className="rf-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Atieno"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && <span className="rf-error">{errors.name}</span>}
            </div>

            <div className="rf-group">
              <label>Company</label>
              <input
                type="text"
                placeholder="e.g. Acme Ltd"
                value={form.company}
                onChange={(e) => handleChange('company', e.target.value)}
              />
              {errors.company && <span className="rf-error">{errors.company}</span>}
            </div>

            <div className="rf-group">
              <label>Title / Role</label>
              <input
                type="text"
                placeholder="e.g. Operations Lead"
                value={form.title}
                onChange={(e) => handleChange('title', e.target.value)}
              />
              {errors.title && <span className="rf-error">{errors.title}</span>}
            </div>

            <div className="rf-group">
              <label>Service Received</label>
              <select
                value={form.service}
                onChange={(e) => handleChange('service', e.target.value)}
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
              {errors.service && <span className="rf-error">{errors.service}</span>}
            </div>

            <div className="rf-group rf-full">
              <label>Your Rating</label>
              <StarRating
                value={form.rating}
                onChange={(v) => handleChange('rating', v)}
              />
              {errors.rating && <span className="rf-error">{errors.rating}</span>}
            </div>

            <div className="rf-group rf-full">
              <label>Your Review</label>
              <textarea
                rows={4}
                placeholder="Share your experience working with Evolence…"
                value={form.review}
                onChange={(e) => handleChange('review', e.target.value)}
              />
              {errors.review && <span className="rf-error">{errors.review}</span>}
            </div>

          </div>

          {submitError && <p className="rf-submit-error">{submitError}</p>}

          <button type="submit" className="rf-submit" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Submit Review'}
            {!submitting && <img src={white_arrow} alt="" />}
          </button>
        </form>
      )}

    </div>
  )
}

export default Reviews