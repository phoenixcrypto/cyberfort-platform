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
        <title>Schedule – CyberFort</title>
        <meta name="description" content="Official platform for Cyber Security 2025 — managed by CyberFort Team. All schedules, materials and announcements in one place." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
            </div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-current">Schedule</span>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element w-20 h-20 top-20 left-10"></div>
              <div className="floating-element w-16 h-16 top-60 right-12"></div>
              
              <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl mb-6">
                Class Schedule
              </h1>
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
                View your class schedule for Group A or Group B. Stay updated with any changes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            {/* Schedule Stats */}
            <div className="stats-grid mb-12" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-card">
                <div className="stat-value">{scheduleData?.groupA?.length || 0}</div>
                <div className="stat-label">Group A Classes</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{scheduleData?.groupB?.length || 0}</div>
                <div className="stat-label">Group B Classes</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{(scheduleData?.groupA?.length || 0) + (scheduleData?.groupB?.length || 0)}</div>
                <div className="stat-label">Total Classes</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">5</div>
                <div className="stat-label">Days/Week</div>
              </div>
            </div>

            {loading ? (
              <div className="enhanced-card text-center">
                <div className="loading-spinner"></div>
                <p className="mt-4 text-text-secondary text-lg">Loading schedule...</p>
              </div>
            ) : error ? (
              <div className="error-card">
                <i className="fas fa-exclamation-triangle text-3xl mb-4"></i>
                <h3 className="mb-4 text-xl font-semibold">Error Loading Schedule</h3>
                <p>{error}</p>
              </div>
            ) : (
              <>
                {/* Enhanced Schedule Header */}
                <div className="enhanced-card" data-aos="fade-up">
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <h2 className="text-primary-blue mb-2 text-xl font-semibold">
                        <i className="fas fa-calendar-alt mr-2"></i> Schedule - {selectedGroup === 'groupA' ? 'Group A' : 'Group B'}
                        <span className="badge badge-primary ml-2">Active</span>
                      </h2>
                      <p className="text-text-muted">
                        {currentSchedule.length} classes scheduled
                      </p>
                    </div>
                    
                    <div className="flex gap-4 items-center flex-wrap">
                      <div className="flex gap-2">
                        <button 
                          className={`filter-btn ${selectedGroup === 'groupA' ? 'active' : ''}`}
                          onClick={() => setSelectedGroup('groupA')}
                        >
                          <i className="fas fa-users mr-2"></i> Group A
                          <span className="badge badge-success ml-1">{scheduleData?.groupA?.length || 0}</span>
                        </button>
                        <button 
                          className={`filter-btn ${selectedGroup === 'groupB' ? 'active' : ''}`}
                          onClick={() => setSelectedGroup('groupB')}
                        >
                          <i className="fas fa-users mr-2"></i> Group B
                          <span className="badge badge-warning ml-1">{scheduleData?.groupB?.length || 0}</span>
                        </button>
                      </div>
                      
                      <button onClick={handlePrint} className="btn-enhanced">
                        <i className="fas fa-print mr-2"></i> Print
                      </button>
                    </div>
                  </div>
                </div>

                {currentSchedule.length > 0 ? (
                  <div className="enhanced-card p-0 overflow-hidden" data-aos="fade-up">
                    <table className="schedule-table">
                      <thead>
                        <tr>
                          <th><i className="fas fa-calendar mr-2"></i> Day</th>
                          <th><i className="fas fa-clock mr-2"></i> Time</th>
                          <th><i className="fas fa-book mr-2"></i> Course</th>
                          <th><i className="fas fa-map-marker-alt mr-2"></i> Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSchedule.map((classItem, index) => (
                          <tr key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <td>
                              <span className="badge badge-primary">{classItem.day}</span>
                            </td>
                            <td>
                              <span className="schedule-time text-text-primary font-semibold">{classItem.time}</span>
                            </td>
                            <td>
                              <span className="schedule-course text-text-primary font-medium">{classItem.course}</span>
                            </td>
                            <td>
                              <span className="schedule-location text-text-secondary">
                                <i className="fas fa-map-marker-alt text-primary-blue mr-1"></i> {classItem.location}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="enhanced-card text-center p-12" data-aos="fade-up">
                    <i className="fas fa-calendar-times text-6xl text-text-muted mb-4"></i>
                    <h3 className="text-text-primary mb-4 text-xl font-semibold">No Schedule Available</h3>
                    <div className="alert alert-info">
                      <i className="fas fa-info-circle mr-2"></i>
                      Schedule for {selectedGroup === 'groupA' ? 'Group A' : 'Group B'} is not available yet.
                    </div>
                  </div>
                )}

                {/* Enhanced Additional Information */}
                <div className="grid-enhanced grid-enhanced-2 mt-12">
                  <div className="enhanced-card enhanced-card-primary" data-aos="fade-up">
                    <h3 className="text-primary-blue mb-6 text-center text-xl font-semibold">
                      <i className="fas fa-info-circle mr-2"></i> Schedule Information
                    </h3>
                    <div className="space-y-4">
                      <div className="alert alert-success">
                        <i className="fas fa-check-circle mr-2"></i>
                        Schedule is updated regularly by course coordinators
                      </div>
                      <div className="alert alert-warning">
                        <i className="fas fa-bell mr-2"></i>
                        Any changes will be announced in the announcements section
                      </div>
                      <div className="alert alert-info">
                        <i className="fas fa-print mr-2"></i>
                        Print-friendly version available using the print button
                      </div>
                      <div className="alert alert-error">
                        <i className="fas fa-phone mr-2"></i>
                        Contact instructors for any schedule-related queries
                      </div>
                    </div>
                  </div>
                  
                  <div className="enhanced-card enhanced-card-success" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-primary-blue mb-6 text-center text-xl font-semibold">
                      <i className="fas fa-bell mr-2"></i> Stay Updated
                    </h3>
                    <p className="text-text-secondary mb-6 text-center">
                      Get notified about schedule changes and important updates.
                    </p>
                    <div className="flex flex-col gap-4">
                      <Link href="/announcements" className="btn-enhanced">
                        <i className="fas fa-bullhorn mr-2"></i> Announcements
                      </Link>
                      <a href="https://wa.me/201553450232" target="_blank" rel="noopener noreferrer" className="btn-enhanced">
                        <i className="fab fa-whatsapp mr-2"></i> WhatsApp
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
