import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="about-text">
            <h2 className="section-title">אודותיי</h2>
            <p className="about-description">
              סטודנט מצטיין לתואר ראשון בהנדסת תוכנה במכללת אפקה, 
              משתתף בתוכנית "סמארט אפ" למצטיינים. מתמחה בפיתוח אפליקציות ווב ומובייל 
              עם רקע עשיר ביזמות, ניהול צוותים ומנהיגות.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <h3>🎓 השכלה</h3>
                <p>B.Sc בהנדסת תוכנה במכללת אפקה | GPA: 95 | מקום ראשון במחזור</p>
              </div>
              
              <div className="detail-item">
                <h3>💼 ניסיון מקצועי</h3>
                <p>מורה למתמטיקה ופיזיקה, מדריך פעילויות חשיבה ספורטיבית</p>
              </div>
              
              <div className="detail-item">
                <h3>🚀 יכולות</h3>
                <p>פיתוח אפליקציות ווב ומובייל, ניהול צוותים, מנהיגות טכנית</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <h3>95</h3>
              <p>GPA</p>
            </div>
            <div className="stat-card">
              <h3>1st</h3>
              <p>במחזור</p>
            </div>
            <div className="stat-card">
              <h3>4+</h3>
              <p>שנות ניסיון</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
