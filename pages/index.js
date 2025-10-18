// Home page with dynamic preview sections and overview of the platform
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import MaterialCard from '../components/MaterialCard'

export default function Home() {
  const [scheduleData, setScheduleData] = useState(null)
  const [materialsData, setMaterialsData] = useState(null)
  const [announcementsData, setAnnouncementsData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO: Replace these URLs with your actual GitHub raw URLs
  const SCHEDULE_JSON_URL = "https://raw.githubusercontent.com/<USERNAME>/<REPO>/main/data/schedule.json"
  const MATERIALS_JSON_URL = "https://raw.githubusercontent.com/<USERNAME>/<REPO>/main/data/materials.json"
  const ANNOUNCEMENTS_JSON_URL = "https://raw.githubusercontent.com/<USERNAME>/<REPO>/main/data/announcements.json"

  useEffect(() => {
    const fetchData = async () => {
      try {
        // For demo purposes, use local example data
        // In production, replace with actual GitHub raw URLs
        const [scheduleRes, materialsRes] = await Promise.all([
          fetch('/data/schedule.example.json'),
          fetch('/data/materials.example.json')
        ])

        if (scheduleRes.ok) {
          const schedule = await scheduleRes.json()
          setScheduleData(schedule)
        }

        if (materialsRes.ok) {
          const materials = await materialsRes.json()
          setMaterialsData(materials)
        }

        // Mock announcements data for demo
        setAnnouncementsData({
          latest: {
            title: "Welcome to CyberSec'25 Platform!",
            content: "This is your central hub for all course materials, schedules, and announcements. Stay updated and organized throughout your cybersecurity journey.",
            date: "2025-01-01",
            author: "ElTmsah"
          }
        })

      } catch (err) {
        setError('Failed to load data. Please check your internet connection.')
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <Head>
        <title>Home – CyberSec'25 | ElTmsah</title>
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
                top: '10%',
                left: '5%',
                width: '80px',
                height: '80px'
              }}></div>
              <div className="floating-element" style={{
                top: '70%',
                right: '8%',
                width: '60px',
                height: '60px'
              }}></div>
              
              <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
                CYBERSEC'25 | ELTMSAH
              </h1>
              <p className="lead" style={{ 
                fontSize: '1.3rem', 
                marginBottom: '2rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Your comprehensive platform for Cyber Security course materials, schedules, 
                and announcements. Organized by students, for students.
              </p>
              <div className="btn-group" style={{ 
                display: 'flex', 
                gap: '1rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link href="/materials" className="btn-enhanced">
                  <i className="fas fa-book"></i> Browse Materials
                </Link>
                <Link href="/schedule" className="btn-enhanced">
                  <i className="fas fa-calendar"></i> View Schedule
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Platform Overview */}
        <section className="section">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2>Platform Overview</h2>
            </div>
            
            <div className="grid-enhanced grid-enhanced-3">
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="100">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div className="skill-icon" style={{
                    background: 'linear-gradient(45deg, var(--primary-blue), #00FFFF)',
                    margin: '0 auto'
                  }}>
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Schedule</h3>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  Access your class schedule for both Group A and Group B. Stay updated with any changes and never miss a class.
                </p>
                <Link href="/schedule" className="btn-enhanced" style={{ width: '100%' }}>
                  <i className="fas fa-calendar"></i> View Schedule
                </Link>
              </div>
              
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div className="skill-icon" style={{
                    background: 'linear-gradient(45deg, var(--success-green), #00FF88)',
                    margin: '0 auto'
                  }}>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Materials</h3>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  Download course materials, lecture notes, and resources. All organized by course and updated regularly.
                </p>
                <Link href="/materials" className="btn-enhanced" style={{ width: '100%' }}>
                  <i className="fas fa-book"></i> Browse Materials
                </Link>
              </div>
              
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="300">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div className="skill-icon" style={{
                    background: 'linear-gradient(45deg, var(--warning-orange), #FF8800)',
                    margin: '0 auto'
                  }}>
                    <i className="fas fa-tasks"></i>
                  </div>
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Tasks</h3>
                <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  Track your assignments and projects. Mark tasks as complete and stay on top of your deadlines.
                </p>
                <Link href="/tasks" className="btn-enhanced" style={{ width: '100%' }}>
                  <i className="fas fa-tasks"></i> View Tasks
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Latest Updates */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2>Latest Updates</h2>
            </div>
            
            <div className="grid-enhanced grid-enhanced-2">
              {/* Latest Materials */}
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="100">
                <h3 style={{ marginBottom: '2rem', color: 'var(--primary-blue)', textAlign: 'center' }}>
                  <i className="fas fa-book"></i> Recent Materials
                </h3>
                {loading ? (
                  <div style={{ textAlign: 'center' }}>
                    <div className="loading-spinner"></div>
                    <p style={{ marginTop: '1rem' }}>Loading materials...</p>
                  </div>
                ) : error ? (
                  <div className="error-card">
                    <i className="fas fa-exclamation-triangle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                    <p>{error}</p>
                  </div>
                ) : materialsData && materialsData.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {materialsData.slice(0, 3).map((material) => (
                      <MaterialCard key={material.id} material={material} />
                    ))}
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <Link href="/materials" className="btn-enhanced">
                        <i className="fas fa-book"></i> View All Materials
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No materials available yet.</p>
                )}
              </div>

              {/* Latest Announcement */}
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                <h3 style={{ marginBottom: '2rem', color: 'var(--primary-blue)', textAlign: 'center' }}>
                  <i className="fas fa-bullhorn"></i> Latest Announcement
                </h3>
                {announcementsData?.latest ? (
                  <div>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{announcementsData.latest.title}</h4>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{announcementsData.latest.content}</p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      fontSize: '0.9rem', 
                      color: 'var(--text-muted)',
                      marginBottom: '1.5rem',
                      padding: '1rem',
                      background: 'rgba(0, 191, 255, 0.1)',
                      borderRadius: '8px'
                    }}>
                      <span><i className="fas fa-user"></i> {announcementsData.latest.author}</span>
                      <span><i className="fas fa-calendar"></i> {formatDate(announcementsData.latest.date)}</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Link href="/announcements" className="btn-enhanced">
                        <i className="fas fa-bullhorn"></i> View All Announcements
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No announcements available yet.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Quick Schedule Preview */}
        {scheduleData && (
          <section className="section">
            <div className="container">
              <div className="section-header" data-aos="fade-up">
                <h2>Today's Schedule Preview</h2>
              </div>
              <div className="enhanced-card" data-aos="fade-up">
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)', textAlign: 'center' }}>
                  <i className="fas fa-calendar-check"></i> Group A - Next Classes
                </h3>
                {scheduleData.groupA && scheduleData.groupA.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {scheduleData.groupA.slice(0, 3).map((classItem, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '1rem',
                        background: 'rgba(0, 191, 255, 0.1)',
                        borderRadius: '10px',
                        borderLeft: '4px solid var(--primary-blue)',
                        transition: 'all 0.3s ease'
                      }}>
                        <div>
                          <strong style={{ color: 'var(--text-primary)' }}>{classItem.course}</strong>
                          <br />
                          <small style={{ color: 'var(--text-muted)' }}><i className="fas fa-map-marker-alt"></i> {classItem.location}</small>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ color: 'var(--primary-blue)', fontWeight: '600', fontSize: '1.1rem' }}>
                            {classItem.day}
                          </span>
                          <br />
                          <small style={{ color: 'var(--text-muted)' }}>{classItem.time}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No schedule available yet.</p>
                )}
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <Link href="/schedule" className="btn-enhanced">
                    <i className="fas fa-calendar"></i> View Full Schedule
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
