import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick, 
  className = '',
  ...props 
}) => {
  const getButtonClass = () => {
    let baseClass = 'btn'
    
    switch (variant) {
      case 'primary':
        baseClass += ' btn-primary'
        break
      case 'secondary':
        baseClass += ' btn-secondary'
        break
      case 'hero':
        baseClass += ' btn-hero'
        break
      default:
        baseClass += ' btn-primary'
    }
    
    return `${baseClass} ${className}`
  }

  return (
    <button 
      className={getButtonClass()} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
