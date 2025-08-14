import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            IP Law Firm
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</Link>
            <Link to="/insights" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Insights</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            
            <SignedOut>
              <Link to="/sign-in" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Login</Link>
            </SignedOut>
            
            <SignedIn>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
