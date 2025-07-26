import React, { useState } from 'react'

const Chatbot = ({
  width = '1078px',
  height = '761px',
  messages = [],
  onSendMessage,
  placeholder = "Start chat"
}) => {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() && onSendMessage) {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const chatbotStyle = {
    width: 'min(95vw, 1000px)',
    height: 'auto',
    minHeight: 'min(80vh, 600px)',
    borderRadius: 'clamp(16px, 4vw, 40px)',
    background: 'linear-gradient(135deg, #F0F6FF 0%, #E9E1FF 100%)',
    position: 'relative',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }

  const chatbotInnerStyle = {
    width: 'calc(100% - 32px)',
    height: 'calc(100% - 32px)',
    borderRadius: 'clamp(8px, 2vw, 16px)',
    background: 'rgba(248, 250, 255, 0.8)',
    position: 'absolute',
    top: '16px',
    left: '16px',
    backdropFilter: 'blur(10px)'
  }

  const separatorStyle = {
    width: '95%',
    height: '0px',
    background: '#B5B5B5',
    boxShadow: '0 2px 8.1px 0 #010000',
    position: 'absolute',
    top: '65px',
    left: '31px'
  }

  const messagesAreaStyle = {
    position: 'absolute',
    top: 'clamp(60px, 8vh, 80px)',
    left: 'clamp(16px, 3vw, 32px)',
    right: 'clamp(16px, 3vw, 32px)',
    bottom: 'clamp(80px, 12vh, 100px)',
    overflowY: 'auto',
    padding: 'clamp(12px, 3vw, 20px)',
    scrollbarWidth: 'thin',
    scrollbarColor: '#D3BAFF transparent'
  }

  const inputAreaStyle = {
    position: 'absolute',
    bottom: '16px',
    left: 'clamp(16px, 3vw, 32px)',
    right: 'clamp(16px, 3vw, 32px)',
    height: 'clamp(44px, 6vh, 54px)',
    background: 'rgba(225, 225, 228, 0.8)',
    borderRadius: 'clamp(8px, 2vw, 12px)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 clamp(12px, 2vw, 16px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  }

  const inputStyle = {
    flex: 1,
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: '#000'
  }

  const sendButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px'
  }

  const regenerateButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(6px, 1.5vw, 10px)',
    padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)',
    borderRadius: 'clamp(12px, 3vw, 20px)',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    position: 'absolute',
    right: 'clamp(16px, 3vw, 32px)',
    bottom: 'clamp(70px, 10vh, 90px)',
    fontFamily: 'Inter',
    fontSize: 'clamp(12px, 2vw, 14px)',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    color: '#4B4B4B'
  }

  return (
    <div style={chatbotStyle}>
      <div style={chatbotInnerStyle}>
        <div style={separatorStyle}></div>

        <div style={messagesAreaStyle}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.type}`}
              style={{
                padding: 'clamp(12px, 3vw, 20px)',
                margin: 'clamp(8px, 2vw, 12px) 0',
                borderRadius: 'clamp(8px, 2vw, 16px)',
                maxWidth: 'min(85%, 500px)',
                background: message.type === 'bot'
                  ? 'linear-gradient(135deg, #EBECF1 0%, #F5F6FA 100%)'
                  : 'linear-gradient(135deg, #E9E1FF 0%, #F0E8FF 100%)',
                marginLeft: message.type === 'bot' ? '0' : 'auto',
                marginRight: message.type === 'bot' ? 'auto' : '0',
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                lineHeight: '1.5',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {message.content}
            </div>
          ))}
        </div>

        <button style={regenerateButtonStyle}>
          <svg width="20" height="20" viewBox="0 0 20 21" fill="none">
            <path d="M13.937 4.71111C14.1562 4.86043 14.3071 5.0907 14.3565 5.35129C14.4059 5.61187 14.3498 5.88141 14.2005 6.10061C14.0512 6.31981 13.8209 6.47072 13.5603 6.52013C13.2998 6.56955 13.0302 6.51342 12.811 6.36411C11.8878 5.73649 10.7811 5.4359 9.6672 5.5102C8.55333 5.58451 7.49636 6.02944 6.66467 6.77413C5.83299 7.51881 5.27445 8.5204 5.07802 9.61933C4.88159 10.7183 5.05858 11.8513 5.58078 12.838C6.10299 13.8247 6.94038 14.6082 7.95954 15.0638C8.9787 15.5194 10.121 15.6208 11.2045 15.3519C12.288 15.0829 13.2503 14.4592 13.9381 13.5799C14.626 12.7006 14.9998 11.6165 15 10.5001C15 10.2349 15.1054 9.98054 15.2929 9.793C15.4804 9.60547 15.7348 9.50011 16 9.50011C16.2652 9.50011 16.5196 9.60547 16.7071 9.793C16.8947 9.98054 17 10.2349 17 10.5001C16.9998 12.0631 16.4764 13.581 15.5134 14.8121C14.5504 16.0431 13.203 16.9165 11.686 17.2929C10.1691 17.6694 8.56974 17.5273 7.14287 16.8894C5.716 16.2514 4.54369 15.1543 3.81271 13.7728C3.08174 12.3912 2.83416 10.8048 3.10942 9.26626C3.38467 7.7277 4.16694 6.32552 5.33156 5.28313C6.49619 4.24074 7.97618 3.61811 9.53573 3.51444C11.0953 3.41078 12.6447 3.83204 13.937 4.71111Z" fill="#777D90"/>
          </svg>
          Regenerate response
        </button>

        <div style={inputAreaStyle}>
          <input
            style={inputStyle}
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button style={sendButtonStyle} onClick={handleSend}>
            <svg width="35" height="19" viewBox="0 0 35 19" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M30.0534 2.41817L5.27303 7.12981L13.5286 9.64241L20.808 5.81349C21.1772 5.61945 21.678 5.51049 22.2 5.51059C22.722 5.51069 23.2226 5.61983 23.5916 5.81401C23.9606 6.00819 24.1678 6.2715 24.1677 6.54601C24.1675 6.82052 23.9599 7.08375 23.5907 7.27779L16.3093 11.1067L21.0914 15.4468L30.0534 2.41817ZM30.689 0.0959821C33.0407 -0.352105 35.3196 0.846243 34.4675 2.08288L24.0728 17.1968C23.2187 18.4365 19.9992 18.5876 18.7416 17.4462L12.4108 11.6945L1.47293 8.36541C-0.69771 7.70415 -0.41039 6.01115 1.94721 5.56202L30.689 0.0959821Z" fill="#33343E"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
