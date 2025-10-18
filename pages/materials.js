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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element w-20 h-20 top-15 left-8"></div>
              <div className="floating-element w-16 h-16 top-75 right-10"></div>
              
              <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl mb-6">
                Course Materials
              </h1>
              <p className="text-xl md:text-2xl text-text-primary font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
                All course files and PDFs. Use the filter or search to find a material quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Controls Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="enhanced-card" data-aos="fade-up">
              <h3 className="text-primary-blue mb-8 text-center text-xl font-semibold">
                <i className="fas fa-filter mr-2"></i> Search & Filter
              </h3>
              <div className="search-filter-container">
                <select 
                  value={selectedCourse} 
                  onChange={(e) => setSelectedCourse(e.target.value)} 
                  aria-label="Filter by course"
                  className="search-enhanced"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
          <div className="container mx-auto">
            {loading ? (
              <div className="enhanced-card text-center">
                <div className="loading-spinner"></div>
                <p className="mt-4 text-text-secondary text-lg">Loading materials...</p>
              </div>
            ) : error ? (
              <div className="error-card">
                <i className="fas fa-exclamation-triangle text-3xl mb-4"></i>
                <h3 className="mb-4 text-xl font-semibold">Error Loading Materials</h3>
                <p>{error}</p>
              </div>
            ) : filteredMaterials.length === 0 ? (
              <div className="enhanced-card text-center">
                <i className="fas fa-search text-5xl text-text-muted mb-4"></i>
                <h3 className="mb-4 text-xl font-semibold text-text-primary">No Materials Found</h3>
                <p className="text-text-secondary">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid-enhanced grid-enhanced-3" data-aos="fade-up">
                {filteredMaterials.map((m) => (
                  <MaterialCard key={m.id} material={m} />
                ))}
              </div>
            )}

            <div className="enhanced-card mt-12 text-center">
              <h3 className="text-primary-blue mb-4 text-xl font-semibold">
                <i className="fas fa-info-circle mr-2"></i> Information
              </h3>
              <p className="text-text-secondary mb-4">
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
