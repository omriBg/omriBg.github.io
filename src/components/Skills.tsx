import { useEffect, useState } from 'react'

const Skills = () => {
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'C', level: 75, icon: '🔧' },
    { name: 'Kotlin', level: 70, icon: '🟠' },
    { name: 'SQL', level: 80, icon: '🗄️' },
    { name: 'R Studio', level: 75, icon: '📊' },
    { name: 'OOP', level: 90, icon: '🏗️' },
    { name: 'React', level: 75, icon: '⚛️' }
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className={`skills-content ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">כישורים וטכנולוגיות</h2>
          <p className="section-subtitle">
            הטכנולוגיות והכלים שאני משתמש בהם ליצירת פתרונות דיגיטליים
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
          
          <div className="skills-categories">
            <div className="category">
              <h3>Programming</h3>
              <p>Python, Java, C, Kotlin, OOP</p>
            </div>
            <div className="category">
              <h3>Data & Analysis</h3>
              <p>SQL, R Studio, Data Analysis</p>
            </div>
            <div className="category">
              <h3>Web Development</h3>
              <p>React, TypeScript, Modern Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
