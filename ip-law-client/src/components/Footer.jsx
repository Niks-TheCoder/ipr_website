function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">IP Law Firm</h3>
            <p className="text-gray-300">Protecting your intellectual property rights since 2020.</p>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Copyright Law</li>
              <li>Patent Filing</li>
              <li>Design Protection</li>
              <li>Trademark Registration</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Email: info@iplawfirm.com</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-300">&copy; 2025 IP Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
