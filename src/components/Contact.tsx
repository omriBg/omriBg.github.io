import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    // יצירת תוכן המייל
    const mailtoLink = `mailto:omri952682@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `שם: ${formData.name}\n` +
      `אימייל: ${formData.email}\n\n` +
      `הודעה:\n${formData.message}`
    )}`
    
    // פתיחת תיבת המייל של המשתמש
    window.open(mailtoLink)
    
    // איפוס הטופס
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">צור קשר</h2>
            <p className="section-subtitle">
              יש לך רעיון לפרויקט? רוצה לעבוד יחד? אני כאן!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h3>אימייל</h3>
                  <a href="mailto:omri952682@gmail.com">omri952682@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h3>טלפון</h3>
                  <a href="tel:+972506620734">050-662-0734</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h3>מיקום</h3>
                  <p>תל אביב, ישראל</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href="https://github.com/omriBg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/omri-ben-gigi-459666360/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>שלח לי הודעה</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">נושא</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
