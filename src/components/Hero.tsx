import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">
              שלום, אני <span className="highlight">עומרי בן-גיגי</span>
            </h1>
            <h2 className="hero-subtitle">מהנדס תוכנה מתחיל</h2>
            <p className="hero-description">
              סטודנט מצטיין לתואר ראשון בהנדסת תוכנה במכללת אפקה. 
              מתמחה בפיתוח אפליקציות ווב ומובייל עם רקע יזמות וניהול צוותים.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">צפה בפרויקטים</a>
              <a href="#contact" className="btn btn-secondary">צור קשר</a>
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>ע</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`scroll-indicator ${isVisible ? 'fade-in' : ''}`}>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
