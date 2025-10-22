export default function Contact() {
  return (
    <section className="contact-section container">
      <h1 className="section-title">Let's Have Coffee Together</h1>
      <p className="section-subtitle">We'd love to hear about your project and explore how we can help.</p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to discuss potential collaboration? Drop us a message and we'll get back to you soon.</p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email Us</h3>
                <p>hello@kaizentechnolabs.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Visit Us</h3>
                <p>123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>

          <div className="contact-extras" style={{marginTop: '1.5rem'}}>
            <h3>Office Hours</h3>
            <p>Mon–Fri: 9:00 AM – 6:00 PM (PT)</p>
            <p>Support: 24/7 for active engagements</p>

            <h3 style={{marginTop: '1rem'}}>Social</h3>
            <p>
              <a href="#" aria-label="LinkedIn" style={{marginRight: '12px'}}>LinkedIn</a>
              <a href="#" aria-label="Twitter" style={{marginRight: '12px'}}>Twitter/X</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We will get back to you.')}}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="How can we help you?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" required placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
            <p style={{marginTop: '0.75rem', color: '#6c757d', fontSize: '0.9rem'}}>By submitting this form you agree to be contacted about your request.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
