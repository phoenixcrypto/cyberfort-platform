// About page with profile information and contact details
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function About() {
  return (
    <>
      <Head>
        <title>About – CyberSec'25 | ElTmsah</title>
        <meta name="description" content="Meet Zeyad Eltmsah - Cyber Security 2025 student and creator of the CyberSec'25 platform. Passionate about leadership, defense, and innovation." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      <Navbar />
      
      <main>
        {/* Hero Profile Section */}
        <section className="about-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Animated Background Elements */}
            <div className="floating-element w-24 h-24 top-20 left-10"></div>
            <div className="floating-element w-16 h-16 top-60 right-15"></div>
            
            <div className="flex flex-col items-center justify-center text-center gap-8 py-16">
              {/* Profile Image with Enhanced Styling */}
              <div className="profile-image-container">
                <div className="profile-image-inner">
                  <Image
                    src="/assets/images/profile.jpg"
                    alt="Zeyad Eltmsah Profile Picture"
                    width={242}
                    height={242}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Name with Gradient Effect */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl mb-4">
                  Zeyad Eltmsah
                </h1>
                
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="text-primary-blue text-xl md:text-2xl font-semibold">
                    🔐 Cyber Security Student
                  </span>
                </div>
              </div>
              
              {/* Enhanced Description */}
              <div data-aos="fade-up" data-aos-delay="400" className="max-w-4xl mx-auto">
                <p className="text-text-primary text-lg md:text-xl leading-relaxed mb-6 font-medium">
                  Class of 2025 • Passionate about Leadership, Defense & Innovation
                </p>
                
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                  Creating digital solutions for academic excellence and building bridges between technology and education.
                </p>
                
                {/* Quick Stats */}
                <div className="flex justify-center gap-8 md:gap-12 flex-wrap mt-8">
                  <div className="text-center">
                    <div className="text-primary-blue text-3xl font-bold">2025</div>
                    <div className="text-text-muted text-sm">Graduation Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-blue text-3xl font-bold">CS</div>
                    <div className="text-text-muted text-sm">Department</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-blue text-3xl font-bold">🐊</div>
                    <div className="text-text-muted text-sm">ElTmsah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Platform Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Story */}
              <div className="enhanced-card" data-aos="fade-up">
                <h3 className="text-primary-blue mb-6 text-xl font-semibold">
                  <i className="fas fa-user-circle mr-2"></i> Personal Story
                </h3>
                
                <div className="text-text-secondary leading-relaxed">
                  <p className="mb-6">
                    ZEYAD MOHAMED — Cyber Security 2025 — organizing course materials and facilitating study for the batch.
                  </p>
                  
                  <p className="mb-6">
                    As a passionate student in the Cyber Security program, I believe in the power of technology 
                    to transform education. This platform represents my commitment to creating tools that help 
                    fellow students stay organized and succeed in their academic journey.
                  </p>
                  
                  <p className="mb-6">
                    Beyond academics, I'm deeply interested in cybersecurity leadership, digital defense strategies, 
                    and innovative solutions that bridge the gap between theoretical knowledge and practical application.
                  </p>
                  
                  <div className="quote-box">
                    <p className="m-0">
                      "Building tomorrow's cybersecurity leaders, one platform at a time."
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform Information */}
              <div className="enhanced-card" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-primary-blue mb-6 text-xl font-semibold">
                  <i className="fas fa-rocket mr-2"></i> About This Platform
                </h3>
                
                <div className="text-text-secondary leading-relaxed">
                  <p className="mb-6">
                    The CyberSec'25 platform is your one-stop destination for all course information. 
                    Created by students, it brings together everything you need in one convenient place - 
                    materials, schedules, assignments, and announcements.
                  </p>
                  
                  <h4 className="text-accent-silver mb-4 text-lg font-semibold">
                    <i className="fas fa-star mr-2"></i> What You Can Do
                  </h4>
                  <ul className="mb-6 pl-6 space-y-2">
                    <li>Access all course materials and lecture notes</li>
                    <li>View your class schedule for Group A or Group B</li>
                    <li>Track your assignments and project deadlines</li>
                    <li>Stay updated with important announcements</li>
                    <li>Use the platform on any device - phone, tablet, or computer</li>
                    <li>Get instant help through WhatsApp</li>
                    <li>Print your schedule for offline reference</li>
                  </ul>
                  
                  <h4 className="text-accent-silver mb-4 text-lg font-semibold">
                    <i className="fas fa-heart mr-2"></i> Why Students Love It
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Easy to Use', 'Always Updated', 'Fast Access', 'Mobile Friendly', 'Free Forever', 'Student Made'].map((feature) => (
                      <span key={feature} className="tech-badge">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Achievements */}
            <div className="enhanced-card mt-12" data-aos="fade-up">
              <h3 className="text-primary-blue mb-8 text-center text-xl font-semibold">
                <i className="fas fa-trophy mr-2"></i> Skills & Focus Areas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="skill-card">
                  <div className="skill-icon bg-gradient-to-r from-primary-blue to-cyan-400">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4 className="text-text-primary mb-2 text-lg font-semibold">Cybersecurity</h4>
                  <p className="text-text-secondary text-sm">
                    Network Security, Digital Defense, Risk Assessment
                  </p>
                </div>
                
                <div className="skill-card">
                  <div className="skill-icon bg-gradient-to-r from-success-green to-green-400">
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 className="text-text-primary mb-2 text-lg font-semibold">Development</h4>
                  <p className="text-text-secondary text-sm">
                    Web Development, Full-Stack Solutions, UI/UX Design
                  </p>
                </div>
                
                <div className="skill-card">
                  <div className="skill-icon bg-gradient-to-r from-warning-orange to-orange-400">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4 className="text-text-primary mb-2 text-lg font-semibold">Leadership</h4>
                  <p className="text-text-secondary text-sm">
                    Team Management, Project Coordination, Mentoring
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="enhanced-card mt-12" data-aos="fade-up">
              <h3 className="text-primary-blue mb-8 text-center text-xl font-semibold">
                <i className="fas fa-envelope mr-2"></i> Get In Touch
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="contact-card">
                  <div className="contact-icon bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/30">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h4 className="text-text-primary mb-2 text-lg font-semibold">WhatsApp</h4>
                  <p className="text-text-secondary mb-4">
                    Quick support, questions, and discussions
                  </p>
                  <a 
                    href="https://wa.me/201553450232" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-enhanced bg-green-500 hover:bg-green-600"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> Contact Now
                  </a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon bg-gradient-to-r from-primary-blue to-primary-blue-hover shadow-lg shadow-primary-blue/30">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4 className="text-text-primary mb-2 text-lg font-semibold">Academic</h4>
                  <p className="text-text-secondary mb-4">
                    Course discussions and academic support
                  </p>
                  <Link href="/materials" className="btn-enhanced">
                    <i className="fas fa-book mr-2"></i> View Materials
                  </Link>
                </div>
              </div>
            </div>

            {/* Platform Info */}
            <div className="enhanced-card mt-12 bg-gradient-to-br from-primary-blue/5 to-cyan-400/2 border-2 border-primary-blue relative overflow-hidden" data-aos="fade-up">
              <div className="absolute -top-1/2 -right-1/2 w-48 h-48 bg-gradient-to-r from-primary-blue/10 to-transparent rounded-full animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-primary-blue mb-6 text-center text-xl font-semibold">
                  <i className="fas fa-users mr-2"></i> Student Community
                </h3>
                
                <div className="text-text-secondary leading-relaxed">
                  <p className="mb-6 text-center text-lg">
                    This platform is created and maintained by students, for students. 
                    Everything is designed to make your academic life easier and more organized.
                  </p>
                  
                  <div className="flex justify-center gap-8 flex-wrap mt-8">
                    <div className="text-center">
                      <div className="text-primary-blue text-2xl font-bold">24/7</div>
                      <div className="text-text-muted text-sm">Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary-blue text-2xl font-bold">100%</div>
                      <div className="text-text-muted text-sm">Free</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary-blue text-2xl font-bold">Always</div>
                      <div className="text-text-muted text-sm">Updated</div>
                    </div>
                  </div>
                  
                  <p className="mt-8 text-center italic">
                    Need help or have suggestions? Contact us anytime through WhatsApp or 
                    reach out to your course coordinators.
                  </p>
                </div>
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