import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Tabs from '../components/Tabs'
import Calendar from '../components/Calendar'
import Button from '../components/Button'

const JournalEntry = () => {
  const [journalText, setJournalText] = useState('')
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  const tabs = [
    { label: 'Journal entrys' },
    { label: 'Dream Entry' }
  ]

  const handleTabChange = (index, tab) => {
    setActiveTab(index)
    if (tab && tab.label === 'Dream Entry') {
      navigate('/dream-entry')
    }
  }

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
    paddingTop: '120px',
    position: 'relative'
  }

  const mainContentStyle = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: 'clamp(20px, 4vw, 40px)',
    display: 'flex',
    flexDirection: 'row',
    gap: 'clamp(20px, 4vw, 40px)',
    alignItems: 'flex-start'
  }

  const journalSectionStyle = {
    flex: '1',
    minHeight: 'min(70vh, 600px)',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'rgba(20, 20, 45, 0.8)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }

  const journalFormStyle = {
    margin: 'clamp(20px, 4vw, 40px)',
    flex: '1',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: 'clamp(20px, 4vw, 40px)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }

  const textareaStyle = {
    width: '100%',
    flex: '1',
    minHeight: '300px',
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

  const submitButtonStyle = {
    alignSelf: 'flex-end',
    marginTop: '20px'
  }

  const tabsStyle = {
    margin: '20px 0',
    width: '100%'
  }

  const calendarStyle = {
    width: 'min(100%, 350px)',
    alignSelf: 'center'
  }

  const placeholderStyle = {
    fontFamily: 'Gwendolyn',
    fontSize: '24px',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.40)',
    margin: '0',
    padding: '0'
  }

  return (
    <div style={pageStyle} className="responsive-page">
      <Navigation />
      <div style={{paddingTop: '140px', position: 'relative', zIndex: 1}}>
        <div style={tabsStyle} className="responsive-section">
          <Tabs
            tabs={tabs}
            defaultActive={0}
            onTabChange={handleTabChange}
          />
        </div>

        <div style={mainContentStyle} className="responsive-section">
          <div style={journalSectionStyle} className="fade-in">
            <div style={journalFormStyle}>
              {journalText === '' && (
                <div style={placeholderStyle}>
                  How was your day.......
                </div>
              )}
              <textarea
                style={textareaStyle}
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                placeholder="Start writing about your day..."
              />
              <div style={submitButtonStyle}>
                <Button variant="primary">Submit</Button>
              </div>
            </div>
          </div>

          <div style={calendarStyle} className="slide-up">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalEntry
