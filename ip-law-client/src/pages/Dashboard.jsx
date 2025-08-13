import { useUser } from '@clerk/clerk-react'

function Dashboard() {
  const { user } = useUser()

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h1>Welcome {user?.firstName || 'Client'}!</h1>
        <div className="dashboard-content">
          <div className="dashboard-card">
            <h3>Your IP Portfolio</h3>
            <p>No intellectual property cases on file.</p>
            <button className="btn btn-primary">Start New Case</button>
          </div>
          
          <div className="dashboard-card">
            <h3>Recent Activity</h3>
            <p>No recent activity to display.</p>
          </div>
          
          <div className="dashboard-card">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="btn btn-secondary">Upload Document</button>
              <button className="btn btn-secondary">Schedule Consultation</button>
              <button className="btn btn-secondary">View Billing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
