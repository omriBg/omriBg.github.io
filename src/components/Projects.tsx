import { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 'project1',
      title: 'פלטפורמת ניהול פרויקטים',
      description: 'אפליקציית ווב מתקדמת לניהול פרויקטים עם React, TypeScript ו-Node.js',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      duration: '3 חודשים',
      complexity: 'מתקדם',
      github: 'https://github.com/omriBg/project-manager',
      live: 'https://project-manager-demo.com',
      features: ['Real-time updates', 'User authentication', 'File upload', 'Analytics dashboard']
    },
    {
      id: 'project2',
      title: 'אפליקציית מזג אוויר',
      description: 'אפליקציית מובייל לבדיקת מזג אוויר עם React Native ו-API מתקדם',
      technologies: ['React Native', 'JavaScript', 'API Integration', 'Geolocation'],
      image: '/project2.jpg',
      duration: '2 חודשים',
      complexity: 'בינוני',
      github: 'https://github.com/omriBg/weather-app',
      live: 'https://weather-app-demo.com',
      features: ['Real-time weather', 'Location-based', '5-day forecast', 'Push notifications']
    },
    {
      id: 'project3',
      title: 'בלוג טכנולוגי',
      description: 'בלוג אישי עם מערכת ניהול תוכן מתקדמת ו-SEO מותאם',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      image: '/project3.jpg',
      duration: '1 חודש',
      complexity: 'בינוני',
      github: 'https://github.com/omriBg/tech-blog',
      live: 'https://tech-blog-demo.com',
      features: ['SEO optimized', 'Markdown support', 'Search functionality', 'Responsive design']
    }
  ]

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'מתקדם': return '#00d4ff'
      case 'בינוני': return '#ffd700'
      case 'מתחיל': return '#00ff88'
      default: return '#00d4ff'
    }
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">פרויקטים</h2>
        <p className="section-subtitle">
          הפרויקטים האחרונים שלי - כל אחד מהם מציג כישורים שונים וטכנולוגיות מתקדמות
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <span>📱</span>
                </div>
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-duration">⏱️ {project.duration}</span>
                    <span 
                      className="project-complexity"
                      style={{ color: getComplexityColor(project.complexity) }}
                    >
                      🎯 {project.complexity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>תכונות עיקריות:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>GitHub</span>
                    <div className="btn-glow"></div>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>צפה באתר</span>
                    <div className="btn-glow"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">פרויקטים הושלמו</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">טכנולוגיות שונות</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">שביעות רצון לקוחות</span>
          </div>
        </div>

        <div className="projects-cta">
          <p>רוצה לראות עוד פרויקטים?</p>
          <a 
            href="https://github.com/omriBg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>צפה ב-GitHub</span>
            <div className="btn-glow"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
