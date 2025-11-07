export default function Work() {
  return (
    <section className="work-section container">
      <h1 className="section-title">Our Work</h1>
      <p className="section-subtitle">Explore our portfolio of successful projects</p>
      <div className="portfolio-grid">
        {[1,2,3,4].map(i => (
          <div key={i} className="portfolio-item">
            <div className="portfolio-image" style={{backgroundImage:`url('/placeholder-${i}.jpg')`}}></div>
            <div className="portfolio-overlay">
              <h3>Project {i}</h3>
              <p>Short description of the project {i}.</p>
              <a className="btn" href="#">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
