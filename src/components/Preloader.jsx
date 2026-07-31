import { useEffect } from 'react'

export default function Preloader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.querySelector('.cs_preloader')
      if (el) {
        el.classList.add('cs_loaded')
        setTimeout(() => el.remove(), 600)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="cs_preloader" role="status" aria-label="Loading">
      <div className="cs_preloader_in">
        <div className="cs_loader" aria-hidden="true">
          <svg className="cs_loader_ring" viewBox="0 0 100 100">
            <circle className="cs_loader_track" cx="50" cy="50" r="44"></circle>
            <circle className="cs_loader_arc" cx="50" cy="50" r="44"></circle>
          </svg>
          <svg className="cs_loader_pulse" viewBox="0 0 64 32" preserveAspectRatio="xMidYMid meet">
            <path className="cs_loader_pulse_line" pathLength="100" d="M0,16 H20 l4,-11 l5,22 l5,-17 l3,6 H64"></path>
          </svg>
        </div>
        <span className="cs_preloader_text">Loading</span>
      </div>
    </div>
  )
}
