export default function WhatWeDo() {
  return (
    <section className="services-section container">
      <h1 className="section-title">What We Do</h1>
      <p className="section-subtitle">Comprehensive IT Solutions for Your Business</p>

      <div className="services-grid">
        {[
          { icon: '💻', title: 'Web Development', text: 'Custom web apps with modern stacks and performance.', bullets: ['SPA/MPA with React, Next.js', 'API-first, GraphQL/REST', 'Performance, a11y, SEO best practices'] },
          { icon: '📱', title: 'Mobile Development', text: 'Native and cross‑platform apps for iOS & Android.', bullets: ['React Native & Flutter', 'App Store & Play publishing', 'CI/CD and OTA updates'] },
          { icon: '☁️', title: 'Cloud Solutions', text: 'Scalable cloud architecture and migrations.', bullets: ['AWS, Azure, GCP', 'IaC with Terraform', 'Observability & FinOps'] },
          { icon: '🎨', title: 'UI/UX Design', text: 'Delightful, accessible, conversion‑focused design.', bullets: ['Design systems', 'Prototyping & testing', 'WCAG accessibility'] },
          { icon: '🔒', title: 'Cybersecurity', text: 'Proactive defense and best‑practice hardening.', bullets: ['Security reviews', 'Pen testing partners', 'Compliance guidance'] },
          { icon: '🤖', title: 'AI & ML', text: 'Intelligent solutions powered by data and models.', bullets: ['RAG & LLM apps', 'ML pipelines', 'MLOps & monitoring'] },
        ].map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon" aria-hidden>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.bullets && (
              <ul className="values-list">
                {s.bullets.map((b, bi) => (<li key={bi}>{b}</li>))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="secondary-cta-inner" style={{marginTop: '2rem'}}>
        <div>
          <h2>Not sure where to start?</h2>
          <p>We’ll help you shape scope, select the right stack, and plan delivery.</p>
        </div>
        <a className="cta-button" href="/contact">Talk to an expert</a>
      </div>
    </section>
  )
}
