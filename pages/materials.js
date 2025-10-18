// Materials page with dynamic JSON fetching, filtering, and search functionality
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import MaterialCard from '../components/MaterialCard'

export default function Materials() {
  const [materials, setMaterials] = useState([])
  const [filteredMaterials, setFilteredMaterials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [courses, setCourses] = useState([])

  // TODO: Replace this URL with your actual GitHub raw URL
  const MATERIALS_JSON_URL = "https://raw.githubusercontent.com/<USERNAME>/<REPO>/main/data/materials.json"

  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true)
      try {
        const res = await fetch(MATERIALS_JSON_URL)
        if (!res.ok) throw new Error('Failed to fetch materials JSON')
        const data = await res.json()
        setMaterials(data)
        setFilteredMaterials(data)
        const uniqueCourses = Array.from(new Set(data.map((m) => m.course))).sort()
        setCourses(uniqueCourses)
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMaterials()
  }, [])

  useEffect(() => {
    let list = [...materials]
    if (selectedCourse) {
      list = list.filter((m) => m.course === selectedCourse)
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase()
      list = list.filter((m) => (m.title + ' ' + m.course + ' ' + m.uploaded_by).toLowerCase().includes(q))
    }
    setFilteredMaterials(list)
  }, [materials, selectedCourse, searchTerm])

  return (
    <>
      <Head>
        <title>Materials – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Course materials for Cyber Security 2025 — managed by ElTmsah" />
      </Head>

      <Navbar />
      <main className="container">
        <section className="page-header" data-aos="fade-up">
          <h1>Materials</h1>
          <p>All course files and PDFs. Use the filter or search to find a material quickly.</p>
        </section>

        <section className="controls" data-aos="fade-up">
          <div className="control-row">
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} aria-label="Filter by course">
              <option value="">All courses</option>
              {courses.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <input
              type="text"
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search materials"
            />
          </div>
        </section>

        <section className="materials-grid" data-aos="fade-up">
          {loading && <p>Loading materials...</p>}
          {error && <p style={{ color: 'var(--accent)' }}>Error: {error}</p>}
          {!loading && !error && filteredMaterials.length === 0 && <p>No materials found.</p>}
          <div className="grid">
            {filteredMaterials.map((m) => (
              <MaterialCard key={m.id} material={m} />
            ))}
          </div>

          <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            To connect this page to your GitHub repository, replace the MATERIALS_JSON_URL in the source code 
            with your actual GitHub raw URL pointing to your materials.json file.
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
