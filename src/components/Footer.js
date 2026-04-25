import React, { useState } from 'react';

const Footer = () => {
  // 1. Manage form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // To show 'Sending...', 'Success', etc.

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid fade-up">
          <div>
            <div className="section-label">Get In Touch</div>
            <h2 className="footer-title">Let's build something <span>great.</span></h2>
            <p className="footer-sub">
              Have a project in mind? Looking for a collaborator or a full-time hire?
              Drop me a message — I'd love to hear from you.
            </p>
            <a href="mailto:hello@yourname.com" className="btn btn-outline footer-mail-btn">
              📧 hello@yourname.com
            </a>
          </div>

          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Jane Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="jane@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  placeholder="Project Inquiry" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✦' : 'Send Message ✦'}
              </button>
              {status === 'error' && <p className="error-text">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Kecho Martin · Data Analytics & Software Engineer</p>
          <div className="footer-socials">
            {/* Social SVGs here - keep as they were in your HTML */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;