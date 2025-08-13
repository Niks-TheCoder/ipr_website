import { useState } from 'react'
import { api } from '../utils/api'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await api.post('/contact', formData)
      
      if (response.data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Get in touch with our IP law experts for a consultation.</p>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">Message sent successfully!</div>}
              
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <strong>📧 Email</strong>
              <p>info@iplawfirm.com</p>
            </div>
            <div className="contact-item">
              <strong>📞 Phone</strong>
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <strong>📍 Address</strong>
              <p>123 Legal Street<br />Law City, LC 12345</p>
            </div>
            <div className="contact-item">
              <strong>🕒 Business Hours</strong>
              <p>Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
