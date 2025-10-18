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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element w-20 h-20 top-20 left-10"></div>
              <div className="floating-element w-16 h-16 top-60 right-12"></div>
              
              <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl mb-6">
                Announcements
              </h1>
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest announcements, schedule changes, and important information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {/* Enhanced Announcements List */}
            <div className="flex flex-col gap-8">
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
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="mb-4 text-text-primary text-2xl font-semibold">
                        {announcement.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
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
                        <span className="text-text-muted text-sm">
                          <i className="fas fa-user text-primary-blue mr-1"></i> {announcement.author}
                        </span>
                        <span className="text-text-muted text-sm">
                          <i className="fas fa-calendar text-primary-blue mr-1"></i> {formatDate(announcement.date)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-text-secondary leading-relaxed text-lg">
                    {announcement.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Information Section */}
            <div className="grid-enhanced grid-enhanced-2 mt-16">
              <div className="enhanced-card" data-aos="fade-up">
                <h3 className="text-primary-blue mb-6 text-center text-xl font-semibold">
                  <i className="fas fa-info-circle mr-2"></i> About Announcements
                </h3>
                <ul className="text-text-secondary leading-relaxed pl-6 space-y-2">
                  <li>Announcements are posted by course coordinators and faculty</li>
                  <li>High priority announcements require immediate attention</li>
                  <li>Check this page regularly for updates and changes</li>
                  <li>Important schedule changes will always be announced here</li>
                </ul>
              </div>
              
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-primary-blue mb-6 text-center text-xl font-semibold">
                  <i className="fas fa-bell mr-2"></i> Stay Notified
                </h3>
                <p className="text-text-secondary mb-6 text-center">
                  Get notified about new announcements and important updates.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/201553450232" target="_blank" rel="noopener noreferrer" className="btn-enhanced">
                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp Group
                  </a>
                  <Link href="/materials" className="btn-enhanced">
                    <i className="fas fa-book mr-2"></i> Materials
                  </Link>
                </div>
              </div>
            </div>

            {/* Enhanced Priority Legend */}
            <div className="enhanced-card mt-12">
              <h3 className="text-primary-blue mb-8 text-center text-xl font-semibold">
                <i className="fas fa-legend mr-2"></i> Priority Legend
              </h3>
              <div className="flex gap-8 flex-wrap justify-center">
                <div className="flex items-center gap-2">
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
                  <span className="text-text-secondary">Urgent - Requires immediate attention</span>
                </div>
                <div className="flex items-center gap-2">
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
                  <span className="text-text-secondary">Important - Should be read soon</span>
                </div>
                <div className="flex items-center gap-2">
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
                  <span className="text-text-secondary">Informational - General updates</span>
                </div>
              </div>
            </div>

            {/* Developer Note */}
            <div className="enhanced-card mt-8 bg-primary-blue/5 border-primary-blue">
              <h4 className="text-primary-blue mb-4 text-lg font-semibold">
                <i className="fas fa-code mr-2"></i> Developer Note
              </h4>
              <p className="text-text-secondary text-sm">
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
