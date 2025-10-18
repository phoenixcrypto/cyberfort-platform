// Tasks page with dynamic JSON fetching and local status management
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import TaskCard from '../components/TaskCard'

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [courseFilter, setCourseFilter] = useState('')

  // TODO: Replace this URL with your actual GitHub raw URL
  const TASKS_JSON_URL = "https://raw.githubusercontent.com/<USERNAME>/<REPO>/main/data/tasks.json"

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      try {
        const res = await fetch(TASKS_JSON_URL)
        if (!res.ok) throw new Error('Failed to fetch tasks JSON')
        const data = await res.json()
        setTasks(data)
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])

  const onStatusToggle = (id, newStatus) => {
    setTasks((prev) => prev.map(t => t.id === id ? { ...t, status: newStatus } : t))
  }

  const filtered = tasks.filter(t => {
    if (statusFilter !== 'all' && t.status !== statusFilter) return false
    if (courseFilter && t.course !== courseFilter) return false
    if (searchTerm && !(t.title + ' ' + t.course + ' ' + t.description).toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const courses = Array.from(new Set(tasks.map(t => t.course))).sort()

  return (
    <>
      <Head>
        <title>Tasks – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Assignments and tasks for Cyber Security 2025 — managed by ElTmsah" />
      </Head>

      <Navbar />
      <main>
        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element" style={{
                top: '15%',
                left: '8%',
                width: '70px',
                height: '70px'
              }}></div>
              <div className="floating-element" style={{
                top: '75%',
                right: '10%',
                width: '50px',
                height: '50px'
              }}></div>
              
              <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                Tasks & Assignments
              </h1>
              <p className="lead" style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Track open and completed tasks. Mark tasks complete locally for quick tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Controls Section */}
        <section className="section">
          <div className="container">
            <div className="enhanced-card" data-aos="fade-up">
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '2rem', textAlign: 'center' }}>
                <i className="fas fa-filter"></i> Search & Filter Tasks
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <select 
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)} 
                  aria-label="Filter by status"
                  className="search-enhanced"
                  style={{ maxWidth: '150px' }}
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="done">Done</option>
                </select>

                <select 
                  value={courseFilter} 
                  onChange={(e) => setCourseFilter(e.target.value)} 
                  aria-label="Filter by course"
                  className="search-enhanced"
                  style={{ maxWidth: '200px' }}
                >
                  <option value="">All courses</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search tasks"
                  className="search-enhanced"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Tasks List */}
        <section className="section">
          <div className="container">
            {loading ? (
              <div className="enhanced-card" style={{ textAlign: 'center' }}>
                <div className="loading-spinner"></div>
                <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Loading tasks...</p>
              </div>
            ) : error ? (
              <div className="error-card">
                <i className="fas fa-exclamation-triangle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '1rem' }}>Error Loading Tasks</h3>
                <p>{error}</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="enhanced-card" style={{ textAlign: 'center' }}>
                <i className="fas fa-search" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>No Tasks Found</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid-enhanced grid-enhanced-2" data-aos="fade-up">
                {filtered.map(t => (
                  <TaskCard key={t.id} task={t} onStatusToggle={onStatusToggle} />
                ))}
              </div>
            )}

            <div className="enhanced-card" style={{ marginTop: '3rem', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                <i className="fas fa-info-circle"></i> Information
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Track your assignments and stay organized with our task management system.
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
