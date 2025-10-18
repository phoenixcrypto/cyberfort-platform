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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </Head>

      <Navbar />
      <main>
        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element w-20 h-20 top-15 left-8"></div>
              <div className="floating-element w-16 h-16 top-75 right-10"></div>
              
              <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl mb-6">
                Tasks & Assignments
              </h1>
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
                Track open and completed tasks. Mark tasks complete locally for quick tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Controls Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="enhanced-card" data-aos="fade-up">
              <h3 className="text-primary-blue mb-8 text-center text-xl font-semibold">
                <i className="fas fa-filter mr-2"></i> Search & Filter Tasks
              </h3>
              <div className="search-filter-container">
                <select 
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)} 
                  aria-label="Filter by status"
                  className="search-enhanced"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
          <div className="container mx-auto">
            {loading ? (
              <div className="enhanced-card text-center">
                <div className="loading-spinner"></div>
                <p className="mt-4 text-text-secondary text-lg">Loading tasks...</p>
              </div>
            ) : error ? (
              <div className="error-card">
                <i className="fas fa-exclamation-triangle text-3xl mb-4"></i>
                <h3 className="mb-4 text-xl font-semibold">Error Loading Tasks</h3>
                <p>{error}</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="enhanced-card text-center">
                <i className="fas fa-search text-5xl text-text-muted mb-4"></i>
                <h3 className="mb-4 text-xl font-semibold text-text-primary">No Tasks Found</h3>
                <p className="text-text-secondary">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid-enhanced grid-enhanced-3" data-aos="fade-up">
                {filtered.map(t => (
                  <TaskCard key={t.id} task={t} onStatusToggle={onStatusToggle} />
                ))}
              </div>
            )}

            <div className="enhanced-card mt-12 text-center">
              <h3 className="text-primary-blue mb-4 text-xl font-semibold">
                <i className="fas fa-info-circle mr-2"></i> Information
              </h3>
              <p className="text-text-secondary mb-4">
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
