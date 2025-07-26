import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Journal = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  const handleTabClick = (index, tab) => {
    setActiveTab(index)
    // Navigate immediately when tab is clicked
    if (tab.label === 'Dream Entry') {
      navigate('/dream-entry')
    } else if (tab.label === 'Journal entrys') {
      navigate('/journal-entry')
    }
  }

  const tabs = [
    { label: 'Journal entrys' },
    { label: 'Dream Entry' }
  ]

  const pageStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(135deg, rgba(121, 73, 255, 0.1) 0%, rgba(101, 0, 208, 0.2) 100%),
      url(https://api.builder.io/api/v1/image/assets/TEMP/4c65a3caa1b3832f8a1bde3851d55d1c73cd976f?width=3024)
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
      url(https://api.builder.io/api/v1/image/assets/TEMP/4c65a3caa1b3832f8a1bde3851d55d1c73cd976f?width=3024)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    paddingTop: '140px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1'
  }

  const tabsContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
    padding: '0 clamp(20px, 4vw, 40px)'
  }

  const tabsStyle = {
    display: 'flex',
    gap: 'clamp(6px, 1.5vw, 8px)',
    marginBottom: 'clamp(16px, 3vw, 24px)',
    flexWrap: 'wrap'
  }

  const tabStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 clamp(16px, 3vw, 20px)',
    height: 'clamp(40px, 5vh, 44px)',
    borderRadius: 'clamp(20px, 4vw, 28px)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '400',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  }

  const journalSectionStyle = {
    width: 'min(90vw, 800px)',
    height: 'auto',
    minHeight: 'min(60vh, 400px)',
    margin: '0 auto'
  }

  const journalContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(20px, 4vw, 40px)',
    padding: 'clamp(40px, 6vw, 80px)'
  }

  const journalEntryButtonStyle = {
    width: 'min(90%, 400px)',
    height: 'clamp(120px, 20vh, 180px)',
    position: 'relative',
    cursor: 'pointer'
  }

  const journalEntryBgStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: `
      linear-gradient(rgba(171, 170, 198, 0.9), rgba(171, 170, 198, 0.9)),
      url(https://api.builder.io/api/v1/image/assets/TEMP/cfe1826d7768618ba835c680b997b7585d9e0392?width=1000)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backdropFilter: 'blur(10px)',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'all 0.3s ease'
  }

  const journalEntryTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    fontFamily: 'Inter',
    fontSize: 'clamp(18px, 3vw, 24px)',
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const dreamEntryButtonStyle = {
    width: 'min(90%, 400px)',
    height: 'clamp(120px, 20vh, 180px)',
    position: 'relative',
    cursor: 'pointer'
  }

  const dreamEntryBgStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: `
      linear-gradient(rgba(227, 223, 250, 0.9), rgba(227, 223, 250, 0.9)),
      url(https://api.builder.io/api/v1/image/assets/TEMP/b2c2e630fb7560666a6b8aebc8be8f16e587a4ab?width=3064)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backdropFilter: 'blur(10px)',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'all 0.3s ease'
  }

  const dreamEntryTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    fontFamily: 'Inter',
    fontSize: 'clamp(18px, 3vw, 24px)',
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={pageStyle} className="responsive-page">
      <Navigation />
      <div style={{paddingTop: '140px', position: 'relative', zIndex: 1}}>
        <div style={tabsContainerStyle}>
          <div style={tabsStyle}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                style={{
                  ...tabStyle,
                  background: activeTab === index
                    ? 'linear-gradient(135deg, #E9E1FF, rgba(233, 225, 255, 0.8))'
                    : 'rgba(255, 255, 255, 0.8)',
                  color: activeTab === index ? '#7949FF' : '#000',
                  transform: activeTab === index ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: activeTab === index
                    ? '0 4px 14px rgba(0, 0, 0, 0.15)'
                    : '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => handleTabClick(index, tab)}
                onMouseEnter={(e) => {
                  if (activeTab !== index) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)'
                    e.target.style.transform = 'translateY(-1px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== index) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)'
                    e.target.style.transform = 'translateY(0)'
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div style={journalSectionStyle} className="adaptive-content">
          <div style={journalContainerStyle}>
            {/* Journal Entry Button */}
            <div
              style={{...journalEntryButtonStyle, cursor: 'pointer'}}
              className="scale-in"
              onClick={() => {
                console.log('Navigating to journal-entry')
                navigate('/journal-entry')
              }}
            >
              <div style={journalEntryBgStyle}></div>
              <div style={journalEntryTextStyle}>
                Journal Entry
              </div>
            </div>

            {/* Dream Entry Button */}
            <div
              style={{...dreamEntryButtonStyle, cursor: 'pointer'}}
              className="scale-in"
              onClick={() => {
                console.log('Navigating to dream-entry')
                navigate('/dream-entry')
              }}
            >
              <div style={dreamEntryBgStyle}></div>
              <div style={dreamEntryTextStyle}>
                Enter Your Dream
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journal
