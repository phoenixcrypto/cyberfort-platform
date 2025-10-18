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
        {/* Hero Section */}
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-up">CYBERSEC'25 | ELTMSAH</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Your comprehensive platform for Cyber Security course materials, schedules, 
              and announcements. Organized by students, for students.
            </p>
            <div data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '2rem' }}>
              <Link href="/materials" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                <i className="fas fa-book"></i> Browse Materials
              </Link>
              <Link href="/schedule" className="btn">
                <i className="fas fa-calendar"></i> View Schedule
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="section">
          <div className="container">
            <h2 data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Platform Overview
            </h2>
            
            <div className="grid grid-3">
              <div className="card" data-aos="fade-up" data-aos-delay="100">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-calendar-alt" style={{ fontSize: '3rem', color: 'var(--neon-blue)', marginBottom: '1rem' }}></i>
                </div>
                <h3>Schedule</h3>
                <p>Access your class schedule for both Group A and Group B. Stay updated with any changes and never miss a class.</p>
                <Link href="/schedule" className="btn">View Schedule</Link>
              </div>
              
              <div className="card" data-aos="fade-up" data-aos-delay="200">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-file-pdf" style={{ fontSize: '3rem', color: 'var(--neon-blue)', marginBottom: '1rem' }}></i>
                </div>
                <h3>Materials</h3>
                <p>Download course materials, lecture notes, and resources. All organized by course and updated regularly.</p>
                <Link href="/materials" className="btn">Browse Materials</Link>
              </div>
              
              <div className="card" data-aos="fade-up" data-aos-delay="300">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <i className="fas fa-tasks" style={{ fontSize: '3rem', color: 'var(--neon-blue)', marginBottom: '1rem' }}></i>
                </div>
                <h3>Tasks</h3>
                <p>Track your assignments and projects. Mark tasks as complete and stay on top of your deadlines.</p>
                <Link href="/tasks" className="btn">View Tasks</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Latest Updates
            </h2>
            
            <div className="grid grid-2">
              {/* Latest Materials */}
              <div data-aos="fade-up" data-aos-delay="100">
                <h3 style={{ marginBottom: '2rem', color: 'var(--neon-blue)' }}>
                  <i className="fas fa-book"></i> Recent Materials
                </h3>
                {loading ? (
                  <div className="loading">
                    <div className="spinner"></div>
                  </div>
                ) : error ? (
                  <div className="error">{error}</div>
                ) : materialsData && materialsData.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {materialsData.slice(0, 3).map((material) => (
                      <MaterialCard key={material.id} material={material} />
                    ))}
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <Link href="/materials" className="btn">View All Materials</Link>
                    </div>
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No materials available yet.</p>
                )}
              </div>

              {/* Latest Announcement */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 style={{ marginBottom: '2rem', color: 'var(--neon-blue)' }}>
                  <i className="fas fa-bullhorn"></i> Latest Announcement
                </h3>
                {announcementsData?.latest ? (
                  <div className="card">
                    <h4>{announcementsData.latest.title}</h4>
                    <p style={{ marginBottom: '1rem' }}>{announcementsData.latest.content}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <span><i className="fas fa-user"></i> {announcementsData.latest.author}</span>
                      <span><i className="fas fa-calendar"></i> {formatDate(announcementsData.latest.date)}</span>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <Link href="/announcements" className="btn">View All Announcements</Link>
                    </div>
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No announcements available yet.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Schedule Preview */}
        {scheduleData && (
          <section className="section">
            <div className="container">
              <h2 data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Today's Schedule Preview
              </h2>
              <div className="card" data-aos="fade-up">
                <h3 style={{ marginBottom: '1rem', color: 'var(--neon-blue)' }}>Group A - Next Classes</h3>
                {scheduleData.groupA && scheduleData.groupA.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {scheduleData.groupA.slice(0, 3).map((classItem, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '0.5rem',
                        background: 'rgba(0, 191, 255, 0.05)',
                        borderRadius: '5px'
                      }}>
                        <div>
                          <strong>{classItem.course}</strong>
                          <br />
                          <small style={{ color: 'var(--text-muted)' }}>{classItem.location}</small>
                        </div>
                        <span style={{ color: 'var(--neon-blue)', fontWeight: '500' }}>
                          {classItem.day} {classItem.time}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No schedule available yet.</p>
                )}
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <Link href="/schedule" className="btn">View Full Schedule</Link>
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
