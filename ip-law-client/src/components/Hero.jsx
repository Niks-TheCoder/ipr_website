import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Protect Your Intellectual Property</h1>
          <p>
            Expert legal services for patents, trademarks, copyrights, and design protection. 
            Safeguard your innovations with our experienced IP law team.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Consultation
            </Link>
            <Link to="/#services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
