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
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-up">Class Schedule</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              View your class schedule for Group A or Group B. Stay updated with any changes.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="schedule-container">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
              </div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : (
              <>
                <div className="schedule-header">
                  <div>
                    <h2>Schedule - {selectedGroup === 'groupA' ? 'Group A' : 'Group B'}</h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                      {currentSchedule.length} classes scheduled
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="group-toggle">
                      <button 
                        className={`group-btn ${selectedGroup === 'groupA' ? 'active' : ''}`}
                        onClick={() => setSelectedGroup('groupA')}
                      >
                        Group A
                      </button>
                      <button 
                        className={`group-btn ${selectedGroup === 'groupB' ? 'active' : ''}`}
                        onClick={() => setSelectedGroup('groupB')}
                      >
                        Group B
                      </button>
                    </div>
                    
                    <button onClick={handlePrint} className="btn">
                      <i className="fas fa-print"></i> Print
                    </button>
                  </div>
                </div>

                {currentSchedule.length > 0 ? (
                  <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
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
                              <strong>{classItem.day}</strong>
                            </td>
                            <td>
                              <span className="schedule-time">{classItem.time}</span>
                            </td>
                            <td>
                              <span className="schedule-course">{classItem.course}</span>
                            </td>
                            <td>
                              <span className="schedule-location">
                                <i className="fas fa-map-marker-alt"></i> {classItem.location}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <i className="fas fa-calendar-times" style={{ fontSize: '4rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></i>
                    <h3>No Schedule Available</h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                      Schedule for {selectedGroup === 'groupA' ? 'Group A' : 'Group B'} is not available yet.
                    </p>
                  </div>
                )}

                {/* Additional Information */}
                <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                  <div className="card" data-aos="fade-up">
                    <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>
                      <i className="fas fa-info-circle"></i> Schedule Information
                    </h3>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                      <li>Schedule is updated regularly by course coordinators</li>
                      <li>Any changes will be announced in the announcements section</li>
                      <li>Print-friendly version available using the print button</li>
                      <li>Contact instructors for any schedule-related queries</li>
                    </ul>
                  </div>
                  
                  <div className="card" data-aos="fade-up" data-aos-delay="200">
                    <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>
                      <i className="fas fa-bell"></i> Stay Updated
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      Get notified about schedule changes and important updates.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link href="/announcements" className="btn">
                        <i className="fas fa-bullhorn"></i> Announcements
                      </Link>
                      <a href="https://wa.me/201553450232" target="_blank" rel="noopener noreferrer" className="btn">
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
