import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Journal from './pages/Journal'
import JournalEntry from './pages/JournalEntry'
import DreamEntry from './pages/DreamEntry'
import Interpreter from './pages/Interpreter'
import StoryGenerator from './pages/StoryGenerator'
import StoryboardGenerator from './pages/StoryboardGenerator'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal-entry" element={<JournalEntry />} />
          <Route path="/dream-entry" element={<DreamEntry />} />
          <Route path="/interpreter" element={<Interpreter />} />
          <Route path="/story-generator" element={<StoryGenerator />} />
          <Route path="/storyboard-generator" element={<StoryboardGenerator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
