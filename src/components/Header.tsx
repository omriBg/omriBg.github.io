import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h2>עומרי בן-גיגי</h2>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('hero')} className="nav-link">בית</a>
            <a onClick={() => scrollToSection('about')} className="nav-link">אודות</a>
            <a onClick={() => scrollToSection('skills')} className="nav-link">כישורים</a>
            <a onClick={() => scrollToSection('projects')} className="nav-link">פרויקטים</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link">צור קשר</a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
