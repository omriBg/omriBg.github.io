import { useEffect, useState } from 'react'

const Projects = () => {
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

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Vision',
      description: 'אפליקציה מתקדמת שנבנתה ב-Kotlin. פרויקט שמציג יכולות פיתוח מובייל מתקדמות וטכנולוגיות חדשניות.',
      technologies: ['Kotlin', 'Android', 'Mobile Development', 'OOP'],
      image: '/project2.jpg',
      github: 'https://github.com/omriBg/Vision',
      live: null,
      icon: '📱'
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className={`projects-content ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">פרויקטים</h2>
          <p className="section-subtitle">
            הפרויקטים האחרונים שפיתחתי - כל אחד מהם מציג כישורים וטכנולוגיות שונות
          </p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>{project.icon}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      צפה בקוד
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="projects-cta">
            <p>רוצה לראות עוד פרויקטים?</p>
            <a 
              href="https://github.com/omriBg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              צפה ב-GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
