// Material card component for displaying course materials with download functionality
import React from 'react'

/*
Props:
 - material: { id, title, course, uploaded_by, date, pdf_url }
*/
const MaterialCard = ({ material }) => {
  const handleDownload = () => {
    if (!material || !material.pdf_url) return
    window.open(material.pdf_url, '_blank')
  }

  return (
    <div className="material-card" data-aos="fade-up">
      <div className="material-card-body">
        <h3 className="material-title">{material.title}</h3>
        <p className="material-meta">
          <strong>{material.course}</strong> • {material.uploaded_by} • {material.date}
        </p>
        <div className="material-actions">
          <button className="btn" onClick={handleDownload} aria-label={`Download ${material.title}`}>
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard
