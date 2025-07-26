import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Tabs from '../components/Tabs'
import Button from '../components/Button'

const DreamEntry = () => {
  const [dreamText, setDreamText] = useState('')
  const [activeTab, setActiveTab] = useState(1)
  const navigate = useNavigate()

  const tabs = [
    { label: 'Journal entrys' },
    { label: 'Dream Entry' }
  ]

  const handleTabChange = (index, tab) => {
    setActiveTab(index)
    if (tab && tab.label === 'Journal entrys') {
      navigate('/journal-entry')
    }
  }

  const pageStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(135deg, rgba(121, 73, 255, 0.1) 0%, rgba(101, 0, 208, 0.2) 100%),
      url(https://api.builder.io/api/v1/image/assets/TEMP/19ee2b6233c958905c8bd9bc2a448b48902ec9a5?width=3024)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    position: 'relative'
  }

  const backgroundStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(135deg, rgba(121, 73, 255, 0.1) 0%, rgba(101, 0, 208, 0.2) 100%),
      url(https://api.builder.io/api/v1/image/assets/TEMP/19ee2b6233c958905c8bd9bc2a448b48902ec9a5?width=3024)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    paddingTop: '120px',
    position: 'relative'
  }

  const tabsStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
    padding: '0 clamp(20px, 4vw, 40px)'
  }

  const dreamSectionStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 clamp(20px, 4vw, 40px)',
    minHeight: 'min(60vh, 500px)'
  }

  const dreamContainerStyle = {
    width: '100%',
    minHeight: '500px',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'rgba(20, 20, 45, 0.8)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }

  const dreamFormStyle = {
    margin: 'clamp(20px, 4vw, 40px)',
    flex: '1',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: 'clamp(20px, 4vw, 40px)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: '300px'
  }

  const textareaStyle = {
    width: '100%',
    flex: '1',
    minHeight: '200px',
    border: 'none',
    outline: 'none',
    resize: 'none',
    fontFamily: 'Inter',
    fontSize: 'clamp(16px, 2.5vw, 18px)',
    color: 'rgba(0, 0, 0, 0.8)',
    background: 'transparent',
    marginTop: '20px',
    lineHeight: '1.6'
  }

  const placeholderStyle = {
    fontFamily: 'Inter',
    fontSize: 'clamp(18px, 3vw, 24px)',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.40)',
    position: 'absolute',
    top: 'clamp(30px, 6vw, 60px)',
    left: 'clamp(20px, 4vw, 40px)'
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: 'clamp(12px, 2vw, 20px)',
    justifyContent: 'flex-end',
    marginTop: '20px',
    flexWrap: 'wrap'
  }

  const submitButtonStyle = {
    minWidth: '120px',
    height: 'clamp(44px, 6vh, 52px)',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'linear-gradient(135deg, #6500D0, #7949FF)',
    border: 'none',
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(101, 0, 208, 0.3)'
  }

  const interpretButtonStyle = {
    minWidth: '120px',
    height: 'clamp(44px, 6vh, 52px)',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'linear-gradient(135deg, #7949FF, #9747FF)',
    border: 'none',
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(121, 73, 255, 0.3)'
  }

  return (
    <div style={pageStyle} className="responsive-page">
      <Navigation />
      <div style={{paddingTop: '140px', position: 'relative', zIndex: 1}}>
        <div style={tabsStyle}>
          <Tabs
            tabs={tabs}
            defaultActive={1}
            onTabChange={handleTabChange}
          />
        </div>

        <div style={dreamSectionStyle}>
          <div style={dreamContainerStyle} className="fade-in">
            <div style={dreamFormStyle}>
              <textarea
                style={textareaStyle}
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                placeholder="Enter your Dream......."
              />

              <div style={buttonContainerStyle}>
                <button style={submitButtonStyle}>
                  Submit
                </button>
                <Link to="/interpreter" style={{ textDecoration: 'none' }}>
                  <button style={interpretButtonStyle}>
                    Interpret
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamEntry
