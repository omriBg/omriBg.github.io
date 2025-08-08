import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const roles = [
    "מהנדס תוכנה מתחיל",
    "Full Stack Developer",
    "React & TypeScript Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // אנימציית typing
    const typingInterval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setTypingIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(false)
      }, 2000)
    }, 3000)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">
              שלום, אני <span className="highlight">עומרי בן-גיגי</span>
            </h1>
            <h2 className="hero-subtitle typing-animation">
              <span className="typing-text">
                {roles[typingIndex]}
                <span className={`cursor ${isTyping ? 'blink' : ''}`}>|</span>
              </span>
            </h2>
            <p className="hero-description">
              סטודנט מצטיין לתואר ראשון בהנדסת תוכנה במכללת אפקה. 
              מתמחה בפיתוח אפליקציות ווב ומובייל עם רקע יזמות וניהול צוותים.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">שנות ניסיון</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">פרויקטים</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">שביעות רצון</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>צפה בפרויקטים</span>
                <div className="btn-glow"></div>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>צור קשר</span>
                <div className="btn-glow"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`scroll-indicator ${isVisible ? 'fade-in' : ''}`}>
          <div className="scroll-arrow"></div>
          <span className="scroll-text">גלול למטה</span>
        </div>
      </div>
      
      {/* אפקטי רקע מתקדמים */}
      <div className="hero-background-effects">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="particles"></div>
      </div>
    </section>
  )
}

export default Hero
