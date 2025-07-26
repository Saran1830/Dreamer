import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Button from '../components/Button'

const Homepage = () => {
  const heroStyle = {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(135deg, rgba(121, 73, 255, 0.3) 0%, rgba(101, 0, 208, 0.5) 100%),
      url(https://api.builder.io/api/v1/image/assets/TEMP/b2c2e630fb7560666a6b8aebc8be8f16e587a4ab?width=3064)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'clamp(80px, 12vh, 120px) 20px clamp(40px, 8vh, 80px)'
  }

  const heroTitleStyle = {
    fontFamily: 'Irish Grover',
    fontSize: 'clamp(32px, 8vw, 72px)',
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 'clamp(60px, 15vh, 200px)',
    maxWidth: 'min(90vw, 900px)',
    lineHeight: '1.2',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
  }

  const heroButtonStyle = {
    marginTop: 'clamp(40px, 8vh, 80px)'
  }

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `
      linear-gradient(45deg, rgba(121, 73, 255, 0.1) 0%, rgba(101, 0, 208, 0.2) 100%),
      url(https://api.builder.io/api/v1/image/assets/TEMP/2a77d81cd1a9946eed616c4782138a1e8d05d01b?width=3094)
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    padding: 'clamp(60px, 10vh, 100px) 0'
  }

  const actionsSectionStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px'
  }

  const actionsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(20px, 6vw, 60px)',
    padding: 'clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)',
    borderRadius: 'clamp(24px, 5vw, 40px)',
    background: 'rgba(6, 0, 174, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
  }

  const sectionHeaderStyle = {
    gridColumn: '1 / -1',
    textAlign: 'center',
    marginBottom: 'clamp(20px, 4vw, 40px)'
  }

  const sectionTitleStyle = {
    fontFamily: 'Inter',
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: '700',
    color: '#FFF',
    marginBottom: '16px',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  }

  const sectionUnderlineStyle = {
    width: 'clamp(60px, 10vw, 100px)',
    height: '4px',
    background: 'linear-gradient(90deg, #D3BAFF, #B794F6)',
    margin: '0 auto',
    borderRadius: '2px'
  }

  const actionCardStyle = {
    width: '100%',
    aspectRatio: '1.3 / 1',
    borderRadius: 'clamp(16px, 4vw, 32px)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
  }

  const cardOverlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'inherit',
    backdropFilter: 'blur(2px)',
    transition: 'all 0.3s ease'
  }

  const cardButtonStyle = {
    width: 'min(80%, 280px)',
    height: 'auto',
    minHeight: '60px',
    position: 'relative'
  }

  const cardButtonBgStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  }

  const cardButtonTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Inter',
    fontSize: 'clamp(16px, 3vw, 20px)',
    fontWeight: '600',
    color: '#6500D0',
    textAlign: 'center',
    padding: '16px 20px',
    width: '100%'
  }

  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle}>
        <Navigation />
        <h1 style={heroTitleStyle} className="fade-in">
          Record Your Dreams. Let AI Reveal Their Secrets.
        </h1>
        <div style={heroButtonStyle} className="slide-up">
          <Link to="/journal">
            <Button variant="hero">Start Journelling</Button>
          </Link>
        </div>
      </div>

      {/* Background and Actions Section */}
      <div style={backgroundStyle}>
        <Navigation />

        <div style={actionsSectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Let's do this</h2>
            <div style={sectionUnderlineStyle}></div>
          </div>

          <div style={actionsContainerStyle}>
            {/* Journal Card */}
            <Link to="/journal" style={{ textDecoration: 'none' }} className="scale-in">
              <div style={actionCardStyle}>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cfe1826d7768618ba835c680b997b7585d9e0392?width=1000"
                  alt="Journal"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50px',
                    opacity: '0.5'
                  }}
                />
                <div style={cardOverlayStyle}>
                  <div style={cardButtonStyle}>
                    <div style={cardButtonBgStyle}></div>
                    <div style={cardButtonTextStyle}>Start Dreaming</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI Interpreter Card */}
            <Link to="/interpreter" style={{ textDecoration: 'none' }} className="scale-in">
              <div style={actionCardStyle}>
                <div style={{
                  ...cardOverlayStyle,
                  background: 'linear-gradient(135deg, rgba(121, 73, 255, 0.4), rgba(101, 0, 208, 0.6))'
                }}>
                  <div style={cardButtonStyle}>
                    <div style={cardButtonBgStyle}></div>
                    <div style={cardButtonTextStyle}>Let's Interpret</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Story Generator Card */}
            <Link to="/story-generator" style={{ textDecoration: 'none' }} className="scale-in">
              <div style={actionCardStyle}>
                <div style={{
                  ...cardOverlayStyle,
                  background: 'linear-gradient(135deg, rgba(183, 148, 246, 0.4), rgba(121, 73, 255, 0.6))'
                }}>
                  <div style={cardButtonStyle}>
                    <div style={cardButtonBgStyle}></div>
                    <div style={cardButtonTextStyle}>Let's make a Story</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* StoryBoard Generator Card */}
            <Link to="/storyboard-generator" style={{ textDecoration: 'none' }} className="scale-in">
              <div style={actionCardStyle}>
                <div style={{
                  ...cardOverlayStyle,
                  background: 'linear-gradient(135deg, rgba(101, 0, 208, 0.4), rgba(121, 73, 255, 0.6))'
                }}>
                  <div style={cardButtonStyle}>
                    <div style={cardButtonBgStyle}></div>
                    <div style={cardButtonTextStyle}>What about a Story Board</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
