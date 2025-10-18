// About page with profile information and contact details
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function About() {
  return (
    <>
      <Head>
        <title>About – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Official platform for Cyber Security 2025 — managed by ElTmsah. All schedules, materials and announcements in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        {/* Profile Section */}
        <section style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center', 
          gap: '1rem', 
          minHeight: '100vh',
          padding: '2rem'
        }}>
          <div style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            border: '3px solid #00FFFF',
            boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <Image
              src="/assets/images/profile.jpg"
              alt="Zeyad ElTmsah Profile Picture"
              width={220}
              height={220}
              style={{
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
          
          <h1 style={{ 
            color: '#00FFFF', 
            fontWeight: 'bold',
            fontSize: '2.5rem',
            margin: '1rem 0 0.5rem 0'
          }}>
            Zeyad (ElTmsah)
          </h1>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '600px'
          }}>
            Student in Cyber Security Department — Class of 2025 🔐<br/>
            Passionate about leadership, defense, and innovation.
          </p>
        </section>

        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-up">About</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Learn more about the CyberSec'25 platform and the team behind it.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2">
              {/* Profile Section */}
              <div className="card" data-aos="fade-up">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, var(--neon-blue), var(--accent-silver))',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: 'var(--bg-primary)'
                  }}>
                    🐊
                  </div>
                  <h2 style={{ color: 'var(--neon-blue)', marginBottom: '0.5rem' }}>
                    ElTmsah
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Cyber Security 2025 Student
                  </p>
                </div>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    زياد التمساح — Cyber Security 2025 — organizing course materials and facilitating study for the batch.
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    As a student in the Cyber Security program, I'm passionate about creating tools that help 
                    fellow students stay organized and succeed in their academic journey. This platform serves 
                    as a centralized hub for all course-related information.
                  </p>
                  
                  <p>
                    The platform is designed to be simple, efficient, and always up-to-date with the latest 
                    course materials, schedules, and announcements.
                  </p>
                </div>
              </div>

              {/* Platform Information */}
              <div className="card" data-aos="fade-up" data-aos-delay="200">
                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-info-circle"></i> About This Platform
                </h3>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    The CyberSec'25 platform is a student-run initiative designed to centralize all course 
                    information in one convenient location. Built with modern web technologies, it provides 
                    a clean and efficient interface for accessing course materials, schedules, and announcements.
                  </p>
                  
                  <h4 style={{ color: 'var(--accent-silver)', marginBottom: '1rem' }}>Features:</h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>Dynamic course materials with search and filtering</li>
                    <li>Interactive class schedules for both groups</li>
                    <li>Task management with progress tracking</li>
                    <li>Real-time announcements and updates</li>
                    <li>Responsive design for all devices</li>
                    <li>WhatsApp integration for quick communication</li>
                  </ul>
                  
                  <h4 style={{ color: 'var(--accent-silver)', marginBottom: '1rem' }}>Technology Stack:</h4>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Next.js with React</li>
                    <li>CSS with custom cyber-academic theme</li>
                    <li>AOS for smooth animations</li>
                    <li>Font Awesome for icons</li>
                    <li>Google Fonts for typography</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="card" style={{ marginTop: '3rem' }} data-aos="fade-up">
              <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                <i className="fas fa-envelope"></i> Contact & Support
              </h3>
              
              <div className="grid grid-2">
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#25D366',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'white'
                  }}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>WhatsApp</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Quick support and questions
                  </p>
                  <a 
                    href="https://wa.me/201553450232" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fab fa-whatsapp"></i> Contact Now
                  </a>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--neon-blue)',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'var(--bg-primary)'
                  }}>
                    <i className="fab fa-telegram"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Telegram</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Course updates and discussions
                  </p>
                  <a 
                    href="#" 
                    className="btn"
                    style={{ opacity: 0.6, cursor: 'not-allowed' }}
                    title="Telegram channel coming soon"
                  >
                    <i className="fab fa-telegram"></i> Coming Soon
                  </a>
                </div>
              </div>
            </div>

            {/* Development Info */}
            <div className="card" style={{ marginTop: '3rem', background: 'rgba(0, 191, 255, 0.05)', borderColor: 'var(--neon-blue)' }} data-aos="fade-up">
              <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>
                <i className="fas fa-code"></i> Development & Maintenance
              </h3>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>
                  This platform is actively maintained and updated by the student community. 
                  All course materials and schedules are managed through external JSON files, 
                  making it easy to update content without redeploying the application.
                </p>
                <p>
                  If you encounter any issues or have suggestions for improvement, 
                  please don't hesitate to reach out via WhatsApp or through the course coordinators.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
