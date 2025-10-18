// Floating WhatsApp button component with pulsing animation
import { useState, useEffect } from 'react'

const WHATSAPP_LINK = "https://wa.me/201553450232"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.open(WHATSAPP_LINK, '_blank')
  }

  return (
    <div
      className={`whatsapp-float ${isVisible ? 'visible' : ''}`}
      role="button"
      onClick={handleClick}
      tabIndex={0}
      aria-label="Contact us on WhatsApp"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </div>
  )
}

export default WhatsAppButton
