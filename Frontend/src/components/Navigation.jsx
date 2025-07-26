import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navigation">
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        <span className="dream">Dream</span>
        <span className="decoder">Decoder</span>
      </Link>

      <div className="nav-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link
            to="/journal"
            onClick={closeMenu}
            className={isActive('/journal') ? 'active' : ''}
          >
            Journal
          </Link>
        </li>
        <li>
          <Link
            to="/interpreter"
            onClick={closeMenu}
            className={isActive('/interpreter') ? 'active' : ''}
          >
            Interpreter
          </Link>
        </li>
        <li>
          <Link
            to="/story-generator"
            onClick={closeMenu}
            className={isActive('/story-generator') ? 'active' : ''}
          >
            Story Generator
          </Link>
        </li>
        <li>
          <Link
            to="/storyboard-generator"
            onClick={closeMenu}
            className={isActive('/storyboard-generator') ? 'active' : ''}
          >
            Storyboard
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
