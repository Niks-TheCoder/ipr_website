function Services() {
  const services = [
    {
      title: "Copyright Law",
      description: "Protect your creative works, writings, and artistic expressions from unauthorized use.",
      icon: "📝"
    },
    {
      title: "Patent Filing",
      description: "Secure exclusive rights to your inventions and innovative technologies.",
      icon: "💡"
    },
    {
      title: "Design Protection",
      description: "Safeguard the unique visual appearance and aesthetics of your products.",
      icon: "🎨"
    },
    {
      title: "Trademark Registration",
      description: "Establish and protect your brand identity, logos, and business names.",
      icon: "®️"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
