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
      <main className="container">
        <section className="page-header" data-aos="fade-up">
          <h1>Tasks & Assignments</h1>
          <p>Track open and completed tasks. Mark tasks complete locally for quick tracking.</p>
        </section>

        <section className="controls" data-aos="fade-up">
          <div className="control-row">
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} aria-label="Filter by status">
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="done">Done</option>
            </select>

            <select value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)} aria-label="Filter by course">
              <option value="">All courses</option>
              {courses.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search tasks"
            />
          </div>
        </section>

        <section className="tasks-list" data-aos="fade-up">
          {loading && <p>Loading tasks...</p>}
          {error && <p style={{ color: 'var(--accent)' }}>Error: {error}</p>}
          {!loading && !error && filtered.length === 0 && <p>No tasks found.</p>}
          <div className="grid">
            {filtered.map(t => (
              <TaskCard key={t.id} task={t} onStatusToggle={onStatusToggle} />
            ))}
          </div>

          <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            To connect this page to your GitHub repository, replace the TASKS_JSON_URL in the source code 
            with your actual GitHub raw URL pointing to your tasks.json file.
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
