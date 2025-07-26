import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Dropdown from '../components/Dropdown'
import Chatbot from '../components/Chatbot'

const Interpreter = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi, Let\'s analyze your dream, What type of analysis do you want?'
    }
  ])
  const [analysisType, setAnalysisType] = useState('')

  const dreamOptions = ['Dream 1', 'Dream 2', 'Dream 3', 'Dream 4']

  const pageStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(135deg, rgba(121, 73, 255, 0.1) 0%, rgba(101, 0, 208, 0.2) 100%),
      url(https://api.builder.io/api/v1/image/assets/TEMP/6ba441a9b1a42603f8b55e3e13ea0ae1657c1406?width=3024)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    paddingTop: '120px'
  }

  const dropdownStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
    padding: '0 clamp(20px, 4vw, 40px)'
  }

  const chatbotStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
    padding: '0 clamp(20px, 4vw, 40px)',
    display: 'flex',
    justifyContent: 'center'
  }

  const analysisButtonsStyle = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 clamp(20px, 4vw, 40px)',
    display: 'flex',
    gap: 'clamp(16px, 3vw, 24px)',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }

  const analysisButtonStyle = (isSelected) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 'clamp(120px, 20vw, 160px)',
    height: 'clamp(40px, 6vh, 48px)',
    padding: '12px clamp(20px, 4vw, 40px)',
    borderRadius: 'clamp(20px, 4vw, 40px)',
    background: isSelected
      ? 'linear-gradient(135deg, #9747FF, #7949FF)'
      : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    fontFamily: 'Inter',
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    fontWeight: '600',
    color: isSelected ? '#FFF' : '#000',
    transition: 'all 0.3s ease',
    boxShadow: isSelected
      ? '0 4px 15px rgba(151, 71, 255, 0.3)'
      : '0 2px 8px rgba(0, 0, 0, 0.1)'
  })

  const handleAnalysisTypeSelect = (type) => {
    setAnalysisType(type)

    if (type === 'Psych') {
      setMessages(prev => [...prev,
        { type: 'user', content: 'Psych' },
        { type: 'bot', content: 'Here\'s the analysis' }
      ])
    }
  }

  const handleSendMessage = (message) => {
    setMessages(prev => [...prev, { type: 'user', content: message }])

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Thank you for your message. I\'m analyzing your dream...'
      }])
    }, 1000)
  }

  return (
    <div style={pageStyle} className="responsive-page">
      <Navigation />

      <div style={dropdownStyle} className="slide-up">
        <Dropdown
          title="Dreams"
          placeholder="Select the Dream"
          options={dreamOptions}
          onSelect={(option) => console.log('Selected:', option)}
        />
      </div>

      <div style={chatbotStyle} className="fade-in">
        <Chatbot
          messages={messages}
          onSendMessage={handleSendMessage}
          placeholder="Start typing"
        />
      </div>

      <div style={analysisButtonsStyle} className="scale-in">
        <button
          style={analysisButtonStyle(analysisType === 'Fun')}
          onClick={() => handleAnalysisTypeSelect('Fun')}
        >
          Fun
        </button>
        <button
          style={analysisButtonStyle(analysisType === 'Psych')}
          onClick={() => handleAnalysisTypeSelect('Psych')}
        >
          Psych
        </button>
      </div>
    </div>
  )
}

export default Interpreter
