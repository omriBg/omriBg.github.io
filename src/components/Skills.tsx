import { useState, useEffect } from 'react'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // אנימציית skills בהדרגה
    const skills = [
      'React', 'TypeScript', 'JavaScript', 'Node.js', 
      'Python', 'HTML/CSS', 'Git', 'MongoDB'
    ]
    
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, skill])
      }, index * 200)
    })
  }, [])

  const skillLevels = {
    'React': 90,
    'TypeScript': 85,
    'JavaScript': 95,
    'Node.js': 80,
    'Python': 75,
    'HTML/CSS': 90,
    'Git': 85,
    'MongoDB': 70
  }

  const categories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      icon: '🎨'
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Python', 'MongoDB'],
      icon: '⚙️'
    },
    {
      name: 'Tools',
      skills: ['Git', 'Docker', 'AWS'],
      icon: '🛠️'
    }
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">כישורים טכניים</h2>
        <p className="section-subtitle">
          הטכנולוגיות והכלים שאני מתמחה בהם
        </p>

        <div className="skills-categories">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className={`category ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3>{category.icon} {category.name}</h3>
              <div className="category-skills">
                {category.skills.map(skill => (
                  <div key={skill} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill}</span>
                      <span className="skill-percentage">{skillLevels[skill as keyof typeof skillLevels]}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skillLevels[skill as keyof typeof skillLevels]}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {animatedSkills.map((skill, index) => (
            <div 
              key={skill}
              className={`skill-card ${isVisible ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">💻</span>
                <h3 className="skill-name">{skill}</h3>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skillLevels[skill as keyof typeof skillLevels]}%` }}
                ></div>
              </div>
              <div className="skill-level">
                {skillLevels[skill as keyof typeof skillLevels]}%
              </div>
            </div>
          ))}
        </div>

        <div className="skills-stats">
          <div className="stat-card">
            <h3>8+</h3>
            <p>טכנולוגיות</p>
          </div>
          <div className="stat-card">
            <h3>3+</h3>
            <p>שנות ניסיון</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>פרויקטים</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
