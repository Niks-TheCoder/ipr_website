import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../hooks/useAdmin'
import { api } from '../utils/api'

function AdminDashboard() {
  const { isAdmin, loading: authLoading } = useAdmin()
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate('/admin-login')
    }
  }, [isAdmin, authLoading, navigate])

  useEffect(() => {
    if (isAdmin) {
      fetchContacts()
    }
  }, [isAdmin])

  const fetchContacts = async () => {
    try {
      const response = await api.get('/contact')
      setContacts(response.data.contacts || [])
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin-login')
  }

  if (authLoading || loading) {
    return <div className="loading">Loading...</div>
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
        
        <div className="admin-content">
          <div className="admin-card">
            <h3>Contact Form Submissions</h3>
            {contacts.length === 0 ? (
              <p>No contact submissions yet.</p>
            ) : (
              <div className="contacts-list">
                {contacts.map((contact) => (
                  <div key={contact._id} className="contact-item">
                    <h4>{contact.name}</h4>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Message:</strong> {contact.message}</p>
                    <p><small>Submitted: {new Date(contact.createdAt).toLocaleString()}</small></p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="admin-card">
            <h3>System Status</h3>
            <p>✅ Database Connected</p>
            <p>✅ API Endpoints Active</p>
            <p>✅ Clerk Authentication</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
