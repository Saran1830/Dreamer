import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Dropdown from '../components/Dropdown'
import Chatbot from '../components/Chatbot'

const StoryboardGenerator = () => {
  const [messages, setMessages] = useState([])

  const dreamOptions = ['Dream 1', 'Dream 2', 'Dream 3', 'Dream 4']

  const pageStyle = {
    width: '100%',
    height: '982px',
    backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/06c692e0c101b38d2dcc1efdb1d732965f03fbb0?width=3024)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  }

  const navigationStyle = {
    position: 'absolute',
    top: '25px',
    left: '50%',
    transform: 'translateX(-50%)'
  }

  const dropdownStyle = {
    position: 'absolute',
    top: '121px',
    left: '174px'
  }

  const chatbotStyle = {
    position: 'absolute',
    top: '230px',
    left: '188px'
  }

  const handleSendMessage = (message) => {
    setMessages(prev => [...prev, { type: 'user', content: message }])
    
    // Simulate bot response for storyboard generation
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'I\'m creating a visual storyboard based on your dream. This will include scene descriptions and visual elements...' 
      }])
    }, 1000)
  }

  return (
    <div style={pageStyle}>
      <div style={navigationStyle}>
        <Navigation />
      </div>

      <div style={dropdownStyle}>
        <Dropdown 
          title="Dreams"
          placeholder="Select the Dream"
          options={dreamOptions}
          onSelect={(option) => console.log('Selected:', option)}
        />
      </div>

      <div style={chatbotStyle}>
        <Chatbot 
          messages={messages}
          onSendMessage={handleSendMessage}
          placeholder="Start chat"
        />
      </div>
    </div>
  )
}

export default StoryboardGenerator
