// About page with profile information and contact details
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function About() {
  return (
    <>
      <Head>
        <title>About – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Meet Zeyad Eltmsah - Cyber Security 2025 student and creator of the CyberSec'25 platform. Passionate about leadership, defense, and innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        {/* Hero Profile Section */}
        <section className="about-hero">
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Animated Background Elements */}
            <div className="floating-element" style={{
              top: '20%',
              left: '10%',
              width: '100px',
              height: '100px'
            }}></div>
            <div className="floating-element" style={{
              top: '60%',
              right: '15%',
              width: '60px',
              height: '60px'
            }}></div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              textAlign: 'center', 
              gap: '2rem',
              padding: '4rem 0'
            }}>
              {/* Profile Image with Enhanced Styling */}
              <div className="profile-image-container">
                <div className="profile-image-inner">
                  <Image
                    src="/assets/images/profile.jpg"
                    alt="Zeyad Eltmsah Profile Picture"
                    width={242}
                    height={242}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </div>
              
              {/* Name with Gradient Effect */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h1 className="gradient-text">
                  Zeyad Eltmsah
                </h1>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <span style={{
                    color: 'var(--neon-blue)',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}>
                    🔐 Cyber Security Student
                  </span>
                </div>
              </div>
              
              {/* Enhanced Description */}
              <div data-aos="fade-up" data-aos-delay="400" style={{ 
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1.3rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  fontWeight: '500'
                }}>
                  Class of 2025 • Passionate about Leadership, Defense & Innovation
                </p>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  Creating digital solutions for academic excellence and building bridges between technology and education.
                </p>
                
                {/* Quick Stats */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '3rem',
                  flexWrap: 'wrap',
                  marginTop: '2rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--neon-blue)', fontSize: '2rem', fontWeight: 'bold' }}>2025</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Graduation Year</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--neon-blue)', fontSize: '2rem', fontWeight: 'bold' }}>CS</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Department</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--neon-blue)', fontSize: '2rem', fontWeight: 'bold' }}>🐊</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ElTmsah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Platform Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2">
              {/* Personal Story */}
              <div className="card" data-aos="fade-up">
                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-user-circle"></i> Personal Story
                </h3>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    زياد محمد — Cyber Security 2025 — organizing course materials and facilitating study for the batch.
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    As a passionate student in the Cyber Security program, I believe in the power of technology 
                    to transform education. This platform represents my commitment to creating tools that help 
                    fellow students stay organized and succeed in their academic journey.
                  </p>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    Beyond academics, I'm deeply interested in cybersecurity leadership, digital defense strategies, 
                    and innovative solutions that bridge the gap between theoretical knowledge and practical application.
                  </p>
                  
                  <div className="quote-box">
                    <p style={{ margin: 0 }}>
                      "Building tomorrow's cybersecurity leaders, one platform at a time."
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform Information */}
              <div className="card" data-aos="fade-up" data-aos-delay="200">
                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1.5rem' }}>
                  <i className="fas fa-rocket"></i> About This Platform
                </h3>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    The CyberSec'25 platform is a student-run initiative designed to centralize all course 
                    information in one convenient location. Built with modern web technologies, it provides 
                    a clean and efficient interface for accessing course materials, schedules, and announcements.
                  </p>
                  
                  <h4 style={{ color: 'var(--accent-silver)', marginBottom: '1rem' }}>
                    <i className="fas fa-star"></i> Key Features
                  </h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>Dynamic course materials with advanced search and filtering</li>
                    <li>Interactive class schedules for both Group A and Group B</li>
                    <li>Task management with real-time progress tracking</li>
                    <li>Instant announcements and important updates</li>
                    <li>Fully responsive design for all devices</li>
                    <li>WhatsApp integration for seamless communication</li>
                    <li>Print-friendly schedule layouts</li>
                  </ul>
                  
                  <h4 style={{ color: 'var(--accent-silver)', marginBottom: '1rem' }}>
                    <i className="fas fa-code"></i> Technology Stack
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {['Next.js', 'React', 'CSS3', 'AOS', 'Font Awesome', 'Google Fonts'].map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Achievements */}
            <div className="card" style={{ marginTop: '3rem' }} data-aos="fade-up">
              <h3 style={{ color: 'var(--neon-blue)', marginBottom: '2rem', textAlign: 'center' }}>
                <i className="fas fa-trophy"></i> Skills & Focus Areas
              </h3>
              
              <div className="grid grid-3">
                <div className="skill-card">
                  <div className="skill-icon" style={{
                    background: 'linear-gradient(45deg, var(--neon-blue), #00FFFF)'
                  }}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Cybersecurity</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Network Security, Digital Defense, Risk Assessment
                  </p>
                </div>
                
                <div className="skill-card">
                  <div className="skill-icon" style={{
                    background: 'linear-gradient(45deg, var(--success-green), #00FF88)'
                  }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Development</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Web Development, Full-Stack Solutions, UI/UX Design
                  </p>
                </div>
                
                <div className="skill-card">
                  <div className="skill-icon" style={{
                    background: 'linear-gradient(45deg, var(--warning-orange), #FF8800)'
                  }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Leadership</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Team Management, Project Coordination, Mentoring
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="card" style={{ marginTop: '3rem' }} data-aos="fade-up">
              <h3 style={{ color: 'var(--neon-blue)', marginBottom: '2rem', textAlign: 'center' }}>
                <i className="fas fa-envelope"></i> Get In Touch
              </h3>
              
              <div className="grid grid-2">
                <div className="contact-card">
                  <div className="contact-icon" style={{
                    background: 'linear-gradient(45deg, #25D366, #128C7E)',
                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)'
                  }}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>WhatsApp</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Quick support, questions, and discussions
                  </p>
                  <a 
                    href="https://wa.me/201553450232" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ 
                      background: '#25D366',
                      borderColor: '#25D366',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                    }}
                  >
                    <i className="fab fa-whatsapp"></i> Contact Now
                  </a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon" style={{
                    background: 'linear-gradient(45deg, var(--neon-blue), #0099CC)',
                    boxShadow: '0 8px 25px rgba(0, 191, 255, 0.3)'
                  }}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Academic</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Course discussions and academic support
                  </p>
                  <Link href="/materials" className="btn">
                    <i className="fas fa-book"></i> View Materials
                  </Link>
                </div>
              </div>
            </div>

            {/* Development Info */}
            <div className="card" style={{ 
              marginTop: '3rem', 
              background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.05), rgba(0, 255, 255, 0.02))', 
              borderColor: 'var(--neon-blue)',
              borderWidth: '2px',
              position: 'relative',
              overflow: 'hidden'
            }} data-aos="fade-up">
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(0, 191, 255, 0.1), transparent)',
                borderRadius: '50%',
                animation: 'pulse 4s ease-in-out infinite'
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                  <i className="fas fa-cogs"></i> Platform Development
                </h3>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.1rem' }}>
                    This platform is actively maintained and updated by the student community. 
                    All course materials and schedules are managed through external JSON files, 
                    making it easy to update content without redeploying the application.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginTop: '2rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--neon-blue)', fontSize: '1.5rem', fontWeight: 'bold' }}>24/7</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Availability</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--neon-blue)', fontSize: '1.5rem', fontWeight: 'bold' }}>100%</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Student-Run</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--neon-blue)', fontSize: '1.5rem', fontWeight: 'bold' }}>Free</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Forever</div>
                    </div>
                  </div>
                  
                  <p style={{ marginTop: '2rem', textAlign: 'center', fontStyle: 'italic' }}>
                    If you encounter any issues or have suggestions for improvement, 
                    please don't hesitate to reach out via WhatsApp or through the course coordinators.
                  </p>
                </div>
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