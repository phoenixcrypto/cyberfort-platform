// Schedule page with Group A/B toggle and responsive table layout
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Schedule() {
  const [scheduleData, setScheduleData] = useState(null)
  const [selectedGroup, setSelectedGroup] = useState('groupA')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO: Replace this URL with your actual GitHub raw URL
  const SCHEDULE_JSON_URL = "https://raw.githubusercontent.com/<USERNAME>/<REPO>/main/data/schedule.json"

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // For demo purposes, use local example data
        // In production, replace with actual GitHub raw URL
        const response = await fetch('/data/schedule.example.json')
        
        if (response.ok) {
          const data = await response.json()
          setScheduleData(data)
        } else {
          throw new Error('Failed to fetch schedule data')
        }
      } catch (err) {
        setError('Failed to load schedule. Please check your internet connection.')
        console.error('Error fetching schedule:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSchedule()
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const currentSchedule = scheduleData ? scheduleData[selectedGroup] || [] : []

  return (
    <>
      <Head>
        <title>Schedule – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Official platform for Cyber Security 2025 — managed by ElTmsah. All schedules, materials and announcements in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                Class Schedule
              </h1>
              <p className="lead" style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                View your class schedule for Group A or Group B. Stay updated with any changes.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {loading ? (
              <div className="enhanced-card" style={{ textAlign: 'center' }}>
                <div className="loading-spinner"></div>
                <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Loading schedule...</p>
              </div>
            ) : error ? (
              <div className="error-card">
                <i className="fas fa-exclamation-triangle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '1rem' }}>Error Loading Schedule</h3>
                <p>{error}</p>
              </div>
            ) : (
              <>
                {/* Enhanced Schedule Header */}
                <div className="enhanced-card" data-aos="fade-up">
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <h2 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                        <i className="fas fa-calendar-alt"></i> Schedule - {selectedGroup === 'groupA' ? 'Group A' : 'Group B'}
                      </h2>
                      <p style={{ color: 'var(--text-muted)' }}>
                        {currentSchedule.length} classes scheduled
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div className="group-toggle">
                        <button 
                          className={`filter-btn ${selectedGroup === 'groupA' ? 'active' : ''}`}
                          onClick={() => setSelectedGroup('groupA')}
                        >
                          <i className="fas fa-users"></i> Group A
                        </button>
                        <button 
                          className={`filter-btn ${selectedGroup === 'groupB' ? 'active' : ''}`}
                          onClick={() => setSelectedGroup('groupB')}
                        >
                          <i className="fas fa-users"></i> Group B
                        </button>
                      </div>
                      
                      <button onClick={handlePrint} className="btn-enhanced">
                        <i className="fas fa-print"></i> Print
                      </button>
                    </div>
                  </div>
                </div>

                {currentSchedule.length > 0 ? (
                  <div className="enhanced-card" style={{ padding: '0', overflow: 'hidden' }} data-aos="fade-up">
                    <table className="schedule-table">
                      <thead>
                        <tr>
                          <th><i className="fas fa-calendar"></i> Day</th>
                          <th><i className="fas fa-clock"></i> Time</th>
                          <th><i className="fas fa-book"></i> Course</th>
                          <th><i className="fas fa-map-marker-alt"></i> Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSchedule.map((classItem, index) => (
                          <tr key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <td>
                              <strong style={{ color: 'var(--primary-blue)' }}>{classItem.day}</strong>
                            </td>
                            <td>
                              <span className="schedule-time" style={{ 
                                color: 'var(--text-primary)',
                                fontWeight: '600'
                              }}>{classItem.time}</span>
                            </td>
                            <td>
                              <span className="schedule-course" style={{ 
                                color: 'var(--text-primary)',
                                fontWeight: '500'
                              }}>{classItem.course}</span>
                            </td>
                            <td>
                              <span className="schedule-location" style={{ 
                                color: 'var(--text-secondary)'
                              }}>
                                <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-blue)' }}></i> {classItem.location}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="enhanced-card" style={{ textAlign: 'center', padding: '3rem' }} data-aos="fade-up">
                    <i className="fas fa-calendar-times" style={{ fontSize: '4rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></i>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>No Schedule Available</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Schedule for {selectedGroup === 'groupA' ? 'Group A' : 'Group B'} is not available yet.
                    </p>
                  </div>
                )}

                {/* Enhanced Additional Information */}
                <div className="grid-enhanced grid-enhanced-2" style={{ marginTop: '3rem' }}>
                  <div className="enhanced-card" data-aos="fade-up">
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                      <i className="fas fa-info-circle"></i> Schedule Information
                    </h3>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                      <li>Schedule is updated regularly by course coordinators</li>
                      <li>Any changes will be announced in the announcements section</li>
                      <li>Print-friendly version available using the print button</li>
                      <li>Contact instructors for any schedule-related queries</li>
                    </ul>
                  </div>
                  
                  <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', textAlign: 'center' }}>
                      <i className="fas fa-bell"></i> Stay Updated
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>
                      Get notified about schedule changes and important updates.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <Link href="/announcements" className="btn-enhanced">
                        <i className="fas fa-bullhorn"></i> Announcements
                      </Link>
                      <a href="https://wa.me/201553450232" target="_blank" rel="noopener noreferrer" className="btn-enhanced">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
