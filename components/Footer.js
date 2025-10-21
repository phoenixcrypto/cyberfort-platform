// Footer component with copyright and social links
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer enhanced-footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-row">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/schedule" className="footer-link">Schedule</Link>
            <Link href="/materials" className="footer-link">Materials</Link>
          </div>
          <div className="footer-row">
            <Link href="/tasks" className="footer-link">Tasks</Link>
            <Link href="/announcements" className="footer-link">Announcements</Link>
            <Link href="/about" className="footer-link">About</Link>
          </div>
        </div>
        <p className="footer-text">
          © 2025 CyberFort. All rights reserved.
        </p>
        <p className="footer-text">
          All course materials and schedules are managed by the student community
        </p>
      </div>
    </footer>
  )
}

export default Footer
