// Navigation bar component with responsive mobile menu and active link highlighting
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Materials', path: '/materials' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'About', path: '/about' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`navbar enhanced-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo enhanced-logo">
          <span className="logo-text">CYBERSEC'25</span>
          <span className="logo-glow"></span>
        </Link>
        
        <ul className={`nav-menu enhanced-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link 
                href={item.path}
                className={`nav-link enhanced-nav-link ${router.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-text">{item.name}</span>
                <span className="nav-underline"></span>
              </Link>
            </li>
          ))}
        </ul>
        
        <button 
          className="mobile-menu-toggle enhanced-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
