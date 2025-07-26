import React, { useState } from 'react'

const Tabs = ({ tabs, onTabChange, defaultActive = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActive)

  const handleTabClick = (index) => {
    setActiveTab(index)
    if (onTabChange) {
      onTabChange(index, tabs[index])
    }
  }

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Tabs
