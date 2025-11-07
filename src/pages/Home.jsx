import WorldAvailabilityMap from '../components/WorldAvailabilityMap'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-content container">
          <h1>Transform Your Digital Future</h1>
          <p>Innovative IT Solutions for Modern Businesses</p>
          <a className="cta-button" href="/contact">Get Started</a>
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <span className="trust-text">Trusted by teams at</span>
          <div className="trust-logos">
            <div className="trust-logo">Acme Corp</div>
            <div className="trust-logo">Globex</div>
            <div className="trust-logo">Innotech</div>
            <div className="trust-logo">Umbrella</div>
            <div className="trust-logo">Soylent</div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights">
        <div className="container highlight-grid">
          {[ 
            { icon: '⚡', title: 'Outcome‑Driven', text: 'We align technology to measurable business results.' },
            { icon: '🛡️', title: 'Enterprise‑Grade', text: 'Security, scalability, and reliability by default.' },
            { icon: '🚀', title: 'Faster to Market', text: 'Modern stacks, lean delivery, and automation.' },
          ].map((h, i) => (
            <div key={i} className="highlight-card fade-in">
              <div className="highlight-icon" aria-hidden>{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section stats">
        <div className="container stats-grid">
          {[ 
            { value: '120+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '30%', label: 'Avg. TTM Acceleration' },
            { value: '24/7', label: 'Support Availability' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Availability Map */}
      <section className="section">
        <div className="container">
          <WorldAvailabilityMap />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container testimonial-grid">
          {[
            { quote: 'Kaizen delivered beyond expectations. Our launch timeline was cut in half.', author: 'Sarah L., Product Lead' },
            { quote: 'Exceptional engineering quality and communication throughout.', author: 'Devon R., CTO' },
            { quote: 'From idea to production with zero drama. Highly recommended.', author: 'Priya S., Founder' },
          ].map((t, i) => (
            <figure key={i} className="testimonial-card fade-in">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="section secondary-cta">
        <div className="container secondary-cta-inner">
          <div>
            <h2>Have an idea? Let’s build it.</h2>
            <p>Book a free discovery call to explore scope, timeline, and budget.</p>
          </div>
          <a className="cta-button" href="/contact">Book a Call</a>
        </div>
      </section>
    </>
  )
}
