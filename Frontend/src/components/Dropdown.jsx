import React, { useState } from 'react'

const Dropdown = ({
  title = "Dreams",
  placeholder = "Select the Dream",
  options = [],
  onSelect,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
    if (onSelect) {
      onSelect(option)
    }
  }

  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown-title" style={{
        color: '#D3BAFF',
        fontFamily: 'Inter',
        fontSize: 'clamp(14px, 2.5vw, 16px)',
        fontWeight: '600',
        marginBottom: 'clamp(6px, 1.5vw, 8px)',
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
      }}>
        {title}
      </div>

      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          maxWidth: '320px',
          minHeight: '50px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          transition: 'all 0.3s ease'
        }}
      >
        <span>{selected || placeholder}</span>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path
            opacity="0.8"
            d="M1 1L6 6L11 1"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
