import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          IP Law Firm
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/#services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          <SignedOut>
            <Link to="/sign-in" className="nav-link">Login</Link>
          </SignedOut>
          
          <SignedIn>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
