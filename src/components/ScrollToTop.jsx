import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const btn = document.getElementById('scrollToTopBtn')
    if (!btn) return
    const onScroll = () => {
      if (window.scrollY >= 350) {
        btn.classList.add('show')
      } else {
        btn.classList.remove('show')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      name="ScrollToTopBtn"
      className="cs_scrollup_btn"
      id="scrollToTopBtn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}
