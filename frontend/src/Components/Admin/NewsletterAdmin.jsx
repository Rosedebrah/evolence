import React, { useState } from 'react'
import './NewsletterAdmin.css'
import { ENDPOINTS } from '../../config/api'
import { Helmet } from 'react-helmet-async'


const NewsletterAdmin = () => {
  const [adminKey, setAdminKey] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')

  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const handleUnlock = (e) => {
    e.preventDefault()
    if (!adminKey.trim()) {
      setAuthError('Enter the admin key.')
      return
    }
    setAuthed(true)
    setAuthError('')
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!subject.trim() || !html.trim()) {
      setError('Subject and content are both required.')
      return
    }
    if (!window.confirm('Send this to every active subscriber? This cannot be undone.')) {
      return
    }

    setSending(true)
    setResult('')
    setError('')

    try {
      const res = await fetch(`${ENDPOINTS.newsletter}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey, subject, html }),
      })
      const data = await res.json()

      if (!res.ok) {
        if (res.status === 401) {
          setError('Invalid admin key.')
          setAuthed(false)
        } else {
          setError(data.message || 'Something went wrong.')
        }
        return
      }

      setResult(data.message)
      setSubject('')
      setHtml('')
    } catch (err) {
      console.error('Send error:', err)
      setError('Could not connect to server.')
    } finally {
      setSending(false)
    }
  }

  if (!authed) {
    return (
      <div className="na-root">
        <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
        <form className="na-login" onSubmit={handleUnlock}>
          <h2>Newsletter Admin</h2>
          <p>Enter the admin key to continue.</p>
          <input
            type="password"
            placeholder="Admin key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
          />
          {authError && <p className="na-error">{authError}</p>}
          <button type="submit">Unlock</button>
        </form>
      </div>
    )
  }

  return (
    <div className="na-root">
      <div className="na-panel">
        <h2>Send a Newsletter</h2>
        <p className="na-sub">This goes out immediately to every active subscriber. Double-check before sending.</p>

        <form onSubmit={handleSend}>
          <label>Subject Line</label>
          <input
            type="text"
            placeholder="e.g. What's new at Evolence — August update"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label>Content (HTML)</label>
          <textarea
            rows={14}
            placeholder="<h2>Hey there</h2><p>Here's what we've been building...</p>"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
          <p className="na-hint">
            Basic HTML tags work here — &lt;h2&gt;, &lt;p&gt;, &lt;a href=""&gt;, &lt;strong&gt;, &lt;br/&gt;.
            An unsubscribe link is added automatically to every email.
          </p>

          {html && (
            <div className="na-preview">
              <span className="na-preview-label">Preview</span>
              <div className="na-preview-box" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          )}

          {result && <p className="na-result">{result}</p>}
          {error && <p className="na-error">{error}</p>}

          <button type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send to All Subscribers'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsletterAdmin