export default function WhoWeAre() {
  return (
    <section className="about-section container">
      <h1 className="section-title">Who We Are</h1>
      <div className="about-content">
        <div className="about-text">
          <p>At Kaizen Technolabs, we are a team of passionate technologists, designers, and innovators dedicated to delivering exceptional digital solutions. Our name 'Kaizen' reflects our commitment to continuous improvement in everything we do.</p>
          <p>We partner with clients to turn ideas into reality using modern engineering, beautiful design, and reliable delivery.</p>
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Innovation at our core</li>
            <li>Client-focused approach</li>
            <li>Transparent communication</li>
            <li>Continuous learning and growth</li>
            <li>Quality in every deliverable</li>
          </ul>
        </div>
        <div className="about-image" style={{textAlign:'center'}}>
          <span className="wave" style={{fontSize:'5rem'}}>🚀</span>
        </div>
      </div>
    </section>
  )
}
