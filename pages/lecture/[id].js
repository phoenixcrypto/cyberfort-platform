// Individual lecture page with dynamic content loading
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function Lecture() {
  const [lecture, setLecture] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()
  const { id } = router.query

  const LECTURES_JSON_URL = "/data/lectures.json"

  useEffect(() => {
    if (!id) return

    const fetchLecture = async () => {
      setLoading(true)
      try {
        const res = await fetch(LECTURES_JSON_URL)
        if (!res.ok) throw new Error('Failed to fetch lectures JSON')
        const data = await res.json()
        const foundLecture = data.find(l => l.id === id)
        
        if (!foundLecture) {
          throw new Error('Lecture not found')
        }
        
        setLecture(foundLecture)
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLecture()
  }, [id])

  const handleDownload = () => {
    if (!lecture || !lecture.pdf_url) return
    window.open(lecture.pdf_url, '_blank')
  }

  const handleFullMaterial = () => {
    if (!lecture || !lecture.full_material_ref) return
    window.open(lecture.full_material_ref, '_blank')
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... – CyberSec'25 | ElTmsah</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        </Head>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="enhanced-card text-center">
            <div className="loading-spinner"></div>
            <p className="mt-4 text-text-secondary text-lg">Loading lecture...</p>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  if (error || !lecture) {
    return (
      <>
        <Head>
          <title>Lecture Not Found – CyberSec'25 | ElTmsah</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        </Head>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="error-card">
            <i className="fas fa-exclamation-triangle text-3xl mb-4"></i>
            <h3 className="mb-4 text-xl font-semibold">Lecture Not Found</h3>
            <p className="mb-6">{error || 'The requested lecture could not be found.'}</p>
            <Link href="/materials" className="btn-enhanced">
              <i className="fas fa-arrow-left mr-2"></i> Back to Materials
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{lecture.lecture_title} – CyberSec'25 | ElTmsah</title>
        <meta name="description" content={`${lecture.subject} lecture: ${lecture.lecture_title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </Head>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content" data-aos="fade-up">
              {/* Animated Background Elements */}
              <div className="floating-element w-20 h-20 top-15 left-8"></div>
              <div className="floating-element w-16 h-16 top-75 right-10"></div>
              
              <h1 className="gradient-text text-3xl md:text-4xl lg:text-5xl mb-6">
                {lecture.lecture_title}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center mb-8">
                <span className="text-primary-blue text-xl font-semibold">
                  🧠 {lecture.subject}
                </span>
                <span className="text-accent-silver text-lg">
                  📅 {new Date(lecture.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lecture Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Description */}
              <div className="enhanced-card mb-8" data-aos="fade-up">
                <h3 className="text-primary-blue mb-6 text-xl font-semibold">
                  <i className="fas fa-info-circle mr-2"></i> Lecture Description
                </h3>
                <div 
                  className="text-text-secondary leading-relaxed text-lg"
                  style={{ direction: lecture.description.includes('في') ? 'rtl' : 'ltr' }}
                >
                  {lecture.description}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                <div className="enhanced-card text-center">
                  <div className="mb-6">
                    <i className="fas fa-file-pdf text-4xl text-primary-blue mb-4"></i>
                    <h3 className="text-text-primary text-xl font-semibold mb-2">
                      Lecture Material
                    </h3>
                    <p className="text-text-secondary">
                      Download the lecture PDF and slides
                    </p>
                  </div>
                  <button 
                    onClick={handleDownload}
                    className="btn-enhanced w-full"
                  >
                    <i className="fas fa-download mr-2"></i> Download Lecture
                  </button>
                </div>

                <div className="enhanced-card text-center">
                  <div className="mb-6">
                    <i className="fas fa-book text-4xl text-accent-silver mb-4"></i>
                    <h3 className="text-text-primary text-xl font-semibold mb-2">
                      Full Course Material
                    </h3>
                    <p className="text-text-secondary">
                      Access complete course materials
                    </p>
                  </div>
                  <button 
                    onClick={handleFullMaterial}
                    className="btn-enhanced w-full bg-accent-silver hover:bg-accent-silver/80"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> View Full Material
                  </button>
                </div>
              </div>

              {/* Back Button */}
              <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
                <Link href="/materials" className="btn-enhanced">
                  <i className="fas fa-arrow-left mr-2"></i> Back to Materials
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
