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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
