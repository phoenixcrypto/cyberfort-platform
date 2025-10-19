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
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
                <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" as="style" />
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
              </Head>

      <Navbar />
      
      <main>
        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element w-20 h-20 top-10 left-5"></div>
              <div className="floating-element w-16 h-16 top-70 right-8"></div>
              
              <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl mb-6">
                CYBERSEC'25 | ELTMSAH
              </h1>
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
                Your comprehensive platform for Cyber Security course materials, schedules, 
                and announcements. Organized by students, for students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/materials" className="btn-enhanced">
                  <i className="fas fa-book mr-2"></i> Browse Materials
                </Link>
                <Link href="/schedule" className="btn-enhanced">
                  <i className="fas fa-calendar mr-2"></i> View Schedule
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Platform Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="section-header" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">Platform Overview</h2>
            </div>
            
            <div className="grid-enhanced grid-enhanced-3">
              <div className="enhanced-card flex flex-col" data-aos="fade-up" data-aos-delay="100">
                <div className="text-center mb-6">
                  <div className="skill-icon bg-gradient-to-r from-primary-blue to-cyan-400 mx-auto">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                </div>
                <h3 className="text-center mb-4 text-xl font-semibold">Schedule</h3>
                <p className="text-center mb-6 text-text-secondary flex-grow">
                  Access your class schedule for both Group A and Group B. Stay updated with any changes and never miss a class.
                </p>
                <Link href="/schedule" className="btn-enhanced w-full mt-auto">
                  <i className="fas fa-calendar mr-2"></i> View Schedule
                </Link>
              </div>
              
              <div className="enhanced-card flex flex-col" data-aos="fade-up" data-aos-delay="200">
                <div className="text-center mb-6">
                  <div className="skill-icon bg-gradient-to-r from-success-green to-green-400 mx-auto">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                </div>
                <h3 className="text-center mb-4 text-xl font-semibold">Materials</h3>
                <p className="text-center mb-6 text-text-secondary flex-grow">
                  Download course materials, lecture notes, and resources. All organized by course and updated regularly.
                </p>
                <Link href="/materials" className="btn-enhanced w-full mt-auto">
                  <i className="fas fa-book mr-2"></i> Browse Materials
                </Link>
              </div>
              
              <div className="enhanced-card flex flex-col" data-aos="fade-up" data-aos-delay="300">
                <div className="text-center mb-6">
                  <div className="skill-icon bg-gradient-to-r from-warning-orange to-orange-400 mx-auto">
                    <i className="fas fa-tasks"></i>
                  </div>
                </div>
                <h3 className="text-center mb-4 text-xl font-semibold">Tasks</h3>
                <p className="text-center mb-6 text-text-secondary flex-grow">
                  Track your assignments and projects. Mark tasks as complete and stay on top of your deadlines.
                </p>
                <Link href="/tasks" className="btn-enhanced w-full mt-auto">
                  <i className="fas fa-tasks mr-2"></i> View Tasks
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Latest Updates */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
          <div className="container mx-auto">
            <div className="section-header" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">Latest Updates</h2>
            </div>
            
            <div className="grid-enhanced grid-enhanced-2">
              {/* Latest Materials */}
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="100">
                <h3 className="mb-8 text-primary-blue text-center text-xl font-semibold">
                  <i className="fas fa-book mr-2"></i> Recent Materials
                </h3>
                {loading ? (
                  <div className="text-center">
                    <div className="loading-spinner"></div>
                    <p className="mt-4 text-text-secondary">Loading materials...</p>
                  </div>
                ) : error ? (
                  <div className="error-card">
                    <i className="fas fa-exclamation-triangle text-3xl mb-4"></i>
                    <p>{error}</p>
                  </div>
                ) : materialsData && materialsData.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {materialsData.slice(0, 3).map((material) => (
                      <MaterialCard key={material.id} material={material} />
                    ))}
                    <div className="text-center mt-4">
                      <Link href="/materials" className="btn-enhanced">
                        <i className="fas fa-book mr-2"></i> View All Materials
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p className="text-text-muted text-center">No materials available yet.</p>
                )}
              </div>

              {/* Latest Announcement */}
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                <h3 className="mb-8 text-primary-blue text-center text-xl font-semibold">
                  <i className="fas fa-bullhorn mr-2"></i> Latest Announcement
                </h3>
                {announcementsData?.latest ? (
                  <div>
                    <h4 className="mb-4 text-text-primary text-lg font-semibold">{announcementsData.latest.title}</h4>
                    <p className="mb-6 text-text-secondary leading-relaxed">{announcementsData.latest.content}</p>
                    <div className="flex justify-between items-center text-sm text-text-muted mb-6 p-4 bg-primary-blue/10 rounded-lg">
                      <span><i className="fas fa-user mr-1"></i> {announcementsData.latest.author}</span>
                      <span><i className="fas fa-calendar mr-1"></i> {formatDate(announcementsData.latest.date)}</span>
                    </div>
                    <div className="text-center">
                      <Link href="/announcements" className="btn-enhanced">
                        <i className="fas fa-bullhorn mr-2"></i> View All Announcements
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p className="text-text-muted text-center">No announcements available yet.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Quick Schedule Preview */}
        {scheduleData && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="section-header" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">Today's Schedule Preview</h2>
              </div>
              <div className="enhanced-card" data-aos="fade-up">
                <h3 className="mb-6 text-primary-blue text-center text-xl font-semibold">
                  <i className="fas fa-calendar-check mr-2"></i> Group A - Next Classes
                </h3>
                {scheduleData.groupA && scheduleData.groupA.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {scheduleData.groupA.slice(0, 3).map((classItem, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-primary-blue/10 rounded-lg border-l-4 border-primary-blue transition-all duration-300 hover:bg-primary-blue/20">
                        <div>
                          <strong className="text-text-primary">{classItem.course}</strong>
                          <br />
                          <small className="text-text-muted"><i className="fas fa-map-marker-alt mr-1"></i> {classItem.location}</small>
                        </div>
                        <div className="text-right">
                          <span className="text-primary-blue font-semibold text-lg">
                            {classItem.day}
                          </span>
                          <br />
                          <small className="text-text-muted">{classItem.time}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-muted text-center">No schedule available yet.</p>
                )}
                <div className="text-center mt-8">
                  <Link href="/schedule" className="btn-enhanced">
                    <i className="fas fa-calendar mr-2"></i> View Full Schedule
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
