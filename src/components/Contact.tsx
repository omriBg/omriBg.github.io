import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'עומרי בן-גיגי'
      }

      // שליחת המייל באמצעות EmailJS
      await emailjs.send(
        'service_omribg', // Service ID - צריך ליצור ב-EmailJS
        'template_omribg', // Template ID - צריך ליצור ב-EmailJS
        templateParams,
        'YOUR_PUBLIC_KEY' // Public Key - צריך לקבל מ-EmailJS
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <span>✅</span>
                <p>ההודעה נשלחה בהצלחה! אחזור אליך בקרוב.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <span>❌</span>
                <p>אירעה שגיאה בשליחת ההודעה. נסה שוב או צור קשר ישירות.</p>
              </div>
            )}
            
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    שולח...
                  </>
                ) : (
                  <>
                    <span>שלח הודעה</span>
                    <div className="btn-glow"></div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
