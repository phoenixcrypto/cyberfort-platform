// Announcements page with static demo content (easily convertible to external source)
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Announcements() {
  // Demo announcements data - can be easily converted to fetch from external source
  const announcements = [
    {
      id: 'ann-1',
      title: 'Welcome to CyberSec\'25 Platform!',
      content: 'Welcome to the official CyberSec\'25 platform! This is your central hub for all course materials, schedules, and announcements. Stay updated and organized throughout your cybersecurity journey. If you have any questions or suggestions, feel free to contact us via WhatsApp.',
      author: 'ElTmsah',
      date: '2025-01-01',
      priority: 'high'
    },
    {
      id: 'ann-2',
      title: 'New Materials Uploaded - Database Course',
      content: 'New materials for the Database course have been uploaded to the platform. Please check the Materials section to download the latest lecture notes and assignments. Make sure to stay updated with all course resources.',
      author: 'Course Coordinator',
      date: '2025-01-02',
      priority: 'medium'
    },
    {
      id: 'ann-3',
      title: 'Schedule Update - Group A',
      content: 'There has been a minor change in the schedule for Group A. The Mathematics class on Friday has been moved from 16:00-17:00 to 17:00-18:00. Please update your schedules accordingly.',
      author: 'Academic Office',
      date: '2025-01-03',
      priority: 'high'
    },
    {
      id: 'ann-4',
      title: 'Assignment Submission Guidelines',
      content: 'Please note that all assignments should be submitted before the due date. Late submissions will not be accepted unless there are exceptional circumstances. Make sure to check the Tasks section regularly for new assignments and their deadlines.',
      author: 'Faculty',
      date: '2025-01-04',
      priority: 'medium'
    },
    {
      id: 'ann-5',
      title: 'Platform Maintenance Notice',
      content: 'The platform will undergo scheduled maintenance this weekend (Saturday 2:00 AM - 4:00 AM). During this time, the platform may be temporarily unavailable. We apologize for any inconvenience.',
      author: 'Technical Team',
      date: '2025-01-05',
      priority: 'low'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'var(--error-red)'
      case 'medium':
        return 'var(--warning-orange)'
      case 'low':
        return 'var(--primary-blue)'
      default:
        return 'var(--text-muted)'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return 'fas fa-exclamation-circle'
      case 'medium':
        return 'fas fa-exclamation-triangle'
      case 'low':
        return 'fas fa-info-circle'
      default:
        return 'fas fa-bullhorn'
    }
  }

  return (
    <>
      <Head>
        <title>Announcements – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Official platform for Cyber Security 2025 — managed by ElTmsah. All schedules, materials and announcements in one place." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element" style={{
                top: '20%',
                left: '10%',
                width: '80px',
                height: '80px'
              }}></div>
              <div className="floating-element" style={{
                top: '60%',
                right: '12%',
                width: '60px',
                height: '60px'
              }}></div>
              
              <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                Announcements
              </h1>
              <p className="lead" style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Stay updated with the latest announcements, schedule changes, and important information.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {/* Enhanced Announcements List */}
            <div className="grid-enhanced" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {announcements.map((announcement, index) => (
                <div 
                  key={announcement.id} 
                  className="enhanced-card" 
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{
                    borderLeft: `4px solid ${getPriorityColor(announcement.priority)}`,
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.5rem' }}>
                        {announcement.title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <span 
                          className="tech-badge"
                          style={{ 
                            background: getPriorityColor(announcement.priority),
                            color: 'var(--bg-primary)',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}
                        >
                          <i className={getPriorityIcon(announcement.priority)}></i> {announcement.priority.toUpperCase()}
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                          <i className="fas fa-user" style={{ color: 'var(--primary-blue)' }}></i> {announcement.author}
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                          <i className="fas fa-calendar" style={{ color: 'var(--primary-blue)' }}></i> {formatDate(announcement.date)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                    {announcement.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Information Section */}
            <div className="grid-enhanced grid-enhanced-2" style={{ marginTop: '4rem' }}>
              <div className="enhanced-card" data-aos="fade-up">
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                  <i className="fas fa-info-circle"></i> About Announcements
                </h3>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                  <li>Announcements are posted by course coordinators and faculty</li>
                  <li>High priority announcements require immediate attention</li>
                  <li>Check this page regularly for updates and changes</li>
                  <li>Important schedule changes will always be announced here</li>
                </ul>
              </div>
              
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                  <i className="fas fa-bell"></i> Stay Notified
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Get notified about new announcements and important updates.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="https://wa.me/201553450232" target="_blank" rel="noopener noreferrer" className="btn-enhanced">
                    <i className="fab fa-whatsapp"></i> WhatsApp Group
                  </a>
                  <Link href="/materials" className="btn-enhanced">
                    <i className="fas fa-book"></i> Materials
                  </Link>
                </div>
              </div>
            </div>

            {/* Enhanced Priority Legend */}
            <div className="enhanced-card" style={{ marginTop: '3rem' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '2rem', textAlign: 'center' }}>
                <i className="fas fa-legend"></i> Priority Legend
              </h3>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span 
                    className="tech-badge"
                    style={{ 
                      background: 'var(--error-red)',
                      color: 'var(--bg-primary)',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    <i className="fas fa-exclamation-circle"></i> HIGH
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>Urgent - Requires immediate attention</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span 
                    className="tech-badge"
                    style={{ 
                      background: 'var(--warning-orange)',
                      color: 'var(--bg-primary)',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    <i className="fas fa-exclamation-triangle"></i> MEDIUM
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>Important - Should be read soon</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span 
                    className="tech-badge"
                    style={{ 
                      background: 'var(--primary-blue)',
                      color: 'var(--bg-primary)',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    <i className="fas fa-info-circle"></i> LOW
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>Informational - General updates</span>
                </div>
              </div>
            </div>

            {/* Developer Note */}
            <div className="card" style={{ marginTop: '2rem', background: 'rgba(0, 191, 255, 0.05)', borderColor: 'var(--primary-blue)' }}>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                <i className="fas fa-code"></i> Developer Note
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                This page currently uses static demo data. To connect to an external source, 
                add a fetch function similar to the Materials and Tasks pages, pointing to your 
                announcements.json file on GitHub.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
