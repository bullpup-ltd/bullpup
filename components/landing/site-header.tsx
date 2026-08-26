'use client'

import { useState, useEffect } from 'react'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    closeMenu()
  }

  return (
    <header className="topbar">
      <div className="nav-inner">

        <a className="brand" href="#top" onClick={() => handleNavClick('top')}>
          BULLPUP <span>Pty Ltd</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <a
            className={activeSection === 'top' ? 'active' : ''}
            href="#top"
            onClick={() => handleNavClick('top')}
          >
            Home
          </a>
          <a
            className={activeSection === 'services' ? 'active' : ''}
            href="#services"
            onClick={() => handleNavClick('services')}
          >
            Services
          </a>
          <a
            className={activeSection === 'gallery' ? 'active' : ''}
            href="#gallery"
            onClick={() => handleNavClick('gallery')}
          >
            Gallery
          </a>
          <a
            className={activeSection === 'contact' ? 'active' : ''}
            href="#contact"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
        </nav>

        <a
          className="button button-small desktop-quote"
          href="#contact"
          onClick={() => handleNavClick('contact')}
        >
          Get a Quote
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}