import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [codingHours, setCodingHours] = useState(0)
  const [projectsCompleted, setProjectsCompleted] = useState(0)
  const [linesOfCode, setLinesOfCode] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // אנימציות מספרים
    const animateNumbers = () => {
      let hours = 0
      let projects = 0
      let lines = 0
      
      const hoursInterval = setInterval(() => {
        hours += 1
        setCodingHours(hours)
        if (hours >= 2000) clearInterval(hoursInterval)
      }, 10)
      
      const projectsInterval = setInterval(() => {
        projects += 1
        setProjectsCompleted(projects)
        if (projects >= 15) clearInterval(projectsInterval)
      }, 100)
      
      const linesInterval = setInterval(() => {
        lines += 100
        setLinesOfCode(lines)
        if (lines >= 50000) clearInterval(linesInterval)
      }, 20)
    }
    
    setTimeout(animateNumbers, 1000)
  }, [])

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'fade-in' : ''}`}>
            <h2 className="section-title">אודות</h2>
            <p className="about-description">
              שלום! אני עומרי בן-גיגי, סטודנט מצטיין לתואר ראשון בהנדסת תוכנה במכללת אפקה. 
              עם רקע עשיר ביזמות, ניהול צוותים ומנהיגות.
            </p>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-icon">⏰</div>
                <h3>{codingHours.toLocaleString()}+</h3>
                <p>שעות קודינג</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🚀</div>
                <h3>{projectsCompleted}+</h3>
                <p>פרויקטים הושלמו</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💻</div>
                <h3>{linesOfCode.toLocaleString()}+</h3>
                <p>שורות קוד</p>
              </div>
            </div>
          </div>
          
          <div className={`about-details ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="detail-item">
              <h3>🎓 השכלה</h3>
              <p>B.Sc בהנדסת תוכנה, מכללת אפקה</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="detail-item">
              <h3>💼 ניסיון מקצועי</h3>
              <p>מורה למתמטיקה ופיזיקה, מדריך פעילויות חשיבה ספורטיבית</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="detail-item">
              <h3>🚀 יכולות</h3>
              <p>פיתוח אפליקציות ווב ומובייל, ניהול צוותים, מנהיגות טכנית</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-timeline">
          <h3>המסע שלי</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2024 - היום</h4>
                <p>סטודנט מצטיין בהנדסת תוכנה</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2023</h4>
                <p>התחלתי ללמוד הנדסת תוכנה</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>התחלתי להתעניין בפיתוח תוכנה</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
