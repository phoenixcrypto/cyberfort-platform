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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
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
                Course Materials
              </h1>
              <p className="lead" style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                All course files and PDFs. Use the filter or search to find a material quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Controls Section */}
        <section className="section">
          <div className="container">
            <div className="enhanced-card" data-aos="fade-up">
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '2rem', textAlign: 'center' }}>
                <i className="fas fa-filter"></i> Search & Filter
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <select 
                  value={selectedCourse} 
                  onChange={(e) => setSelectedCourse(e.target.value)} 
                  aria-label="Filter by course"
                  className="search-enhanced"
                  style={{ maxWidth: '200px' }}
                >
                  <option value="">All courses</option>
                  {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>

                <input
                  type="text"
                  placeholder="Search materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search materials"
                  className="search-enhanced"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Materials Grid */}
        <section className="section">
          <div className="container">
            {loading ? (
              <div className="enhanced-card" style={{ textAlign: 'center' }}>
                <div className="loading-spinner"></div>
                <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Loading materials...</p>
              </div>
            ) : error ? (
              <div className="error-card">
                <i className="fas fa-exclamation-triangle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '1rem' }}>Error Loading Materials</h3>
                <p>{error}</p>
              </div>
            ) : filteredMaterials.length === 0 ? (
              <div className="enhanced-card" style={{ textAlign: 'center' }}>
                <i className="fas fa-search" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>No Materials Found</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid-enhanced grid-enhanced-2" data-aos="fade-up">
                {filteredMaterials.map((m) => (
                  <MaterialCard key={m.id} material={m} />
                ))}
              </div>
            )}

            <div className="enhanced-card" style={{ marginTop: '3rem', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                <i className="fas fa-info-circle"></i> Information
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                All course materials are organized and updated regularly for easy access.
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
