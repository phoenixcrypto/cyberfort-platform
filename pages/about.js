// About page with CyberFort team information and vision
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
        <title>About – CyberFort</title>
        <meta name="description" content="Meet the CyberFort team - Cyber Security 2025 student leaders building the ultimate academic platform for cybersecurity students." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main className="min-h-screen" style={{ backgroundColor: '#0a0f1a' }}>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
            </div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-current">About</span>
            </div>
          </div>
        </div>

        {/* About CyberFort Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 my-10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#00ffff' }}>
              About CyberFort
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#e0e0e0' }}>
              منصة CyberFort هي القاعدة المركزية لدفعة الأمن السيبراني، حيث تُجمع المحاضرات، الملفات، المهام، والتنبيهات في مكان واحد منظم وسهل الوصول إليه، من أجل بناء مجتمع تعليمي متعاون يقوده طلاب القسم أنفسهم.
            </p>
          </div>
        </section>

        {/* Divider Line */}
        <div className="border-t border-cyan-500 my-8"></div>

        {/* Team Leaders Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 my-10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#00ffff' }}>
              Team Leaders
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Zeyad Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="text-center">
                  <Image
                    src="/assets/images/profile.jpg"
                    alt="Zeyad ElTmsah"
                    width={112}
                    height={112}
                    className="rounded-full w-28 h-28 mx-auto shadow-lg mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#00ffff' }}>
                    Zeyad (ElTmsah)
                  </h3>
                  <p className="text-lg font-semibold mb-4" style={{ color: '#38bdf8' }}>
                    Leader & Developer
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    مسؤول عن التطوير التقني للموقع، تنظيم المواد، والإشراف على الجانب التقني للمشروع.
                  </p>
                  <a
                    href="https://wa.me/201553450232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>

              {/* Youssef Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto shadow-lg mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-4xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#00ffff' }}>
                    Youssef Walid
                  </h3>
                  <p className="text-lg font-semibold mb-4" style={{ color: '#38bdf8' }}>
                    Leader & Coordinator
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    مسؤول عن التنسيق الأكاديمي، التواصل مع الدكاترة، وإدارة التواصل مع الطلاب.
                  </p>
                  <a
                    href="https://wa.me/201148655803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Line */}
        <div className="border-t border-cyan-500 my-8"></div>

        {/* Vision Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 my-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#00ffff' }}>
              Vision
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#e0e0e0' }}>
              نهدف من خلال CyberFort إلى بناء منصة مستدامة تمثل كل طالب في القسم، وتكون مرجعًا رقميًا متكاملًا للعلم والتنظيم، تمتد للأجيال القادمة من طلاب الأمن السيبراني.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}