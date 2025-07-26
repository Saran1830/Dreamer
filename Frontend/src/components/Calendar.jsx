import React, { useState } from 'react'

const Calendar = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState('Dec')
  const [currentYear, setCurrentYear] = useState('2022')
  const [selectedDate, setSelectedDate] = useState(9)

  const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const years = ['2019', '2020', '2021', '2022', '2023', '2024']
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const getDaysInMonth = () => {
    // Mock calendar data for December 2022
    const prevMonthDays = [25, 26, 27, 28, 29, 30]
    const currentMonthDays = Array.from({ length: 31 }, (_, i) => i + 1)
    const nextMonthDays = [1, 2, 3, 4, 5]

    return { prevMonthDays, currentMonthDays, nextMonthDays }
  }

  const { prevMonthDays, currentMonthDays, nextMonthDays } = getDaysInMonth()

  const handleDateClick = (date) => {
    setSelectedDate(date)
    if (onDateSelect) {
      onDateSelect(date)
    }
  }

  const calendarStyle = {
    display: 'flex',
    width: '330px',
    padding: '22px 20px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '22px',
    borderRadius: '14px',
    background: '#FCFCFC',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
  }

  const topBarStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const dateContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
    width: '100%'
  }

  const daysRowStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const dayHeaderStyle = {
    width: '30px',
    color: '#656565',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '500'
  }

  const datesGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }

  const dateRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
  }

  const dateBubbleStyle = (date, isDisabled = false, isToday = false) => ({
    display: 'flex',
    width: '30px',
    height: '30px',
    padding: '6px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    cursor: isDisabled ? 'default' : 'pointer',
    color: isDisabled ? '#CACACA' : isToday ? '#7B61FF' : '#222',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '400',
    position: 'relative'
  })

  const buttonsStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    gap: '10px'
  }

  const buttonStyle = (isPrimary = false) => ({
    display: 'flex',
    padding: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    borderRadius: '6px',
    border: isPrimary ? 'none' : '1px solid #222',
    background: isPrimary ? '#7B61FF' : 'transparent',
    color: isPrimary ? '#FCFCFC' : '#222',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer'
  })

  return (
    <div style={calendarStyle}>
      <div style={topBarStyle}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '500', color: '#222' }}>
            {currentMonth}
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '500', color: '#222' }}>
            {currentYear}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '14px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M25.6988 19.6736L17.5725 11.5473C17.4184 11.3947 17.2103 11.3091 16.9935 11.3091C16.7766 11.3091 16.5685 11.3947 16.4145 11.5473L8.28814 19.6736C8.1779 19.7911 8.10318 19.9374 8.07262 20.0956C8.04206 20.2538 8.05691 20.4174 8.11546 20.5675C8.17763 20.7154 8.28218 20.8416 8.41595 20.9302C8.54972 21.0187 8.70671 21.0657 8.86714 21.0652H25.1198C25.2802 21.0657 25.4372 21.0187 25.571 20.9302C25.7048 20.8416 25.8093 20.7154 25.8715 20.5675C25.93 20.4174 25.9449 20.2538 25.9143 20.0956C25.8838 19.9374 25.809 19.7911 25.6988 19.6736Z" fill="#222222"/>
            </svg>
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M25.8759 13.4367C25.8137 13.2888 25.7092 13.1626 25.5754 13.074C25.4416 12.9855 25.2846 12.9385 25.1242 12.939H8.87154C8.7111 12.9385 8.55411 12.9855 8.42034 13.074C8.28658 13.1626 8.18202 13.2888 8.11985 13.4367C8.06131 13.5868 8.04645 13.7504 8.07701 13.9086C8.10757 14.0668 8.1823 14.2131 8.29254 14.3306L16.4189 22.4569C16.5742 22.6071 16.7818 22.6911 16.9979 22.6911C17.2139 22.6911 17.4215 22.6071 17.5769 22.4569L25.7032 14.3306C25.8134 14.2131 25.8882 14.0668 25.9187 13.9086C25.9493 13.7504 25.9344 13.5868 25.8759 13.4367Z" fill="#222222"/>
            </svg>
          </button>
        </div>
      </div>

      <div style={dateContainerStyle}>
        <div style={daysRowStyle}>
          {daysOfWeek.map((day) => (
            <div key={day} style={dayHeaderStyle}>{day}</div>
          ))}
        </div>

        <div style={datesGridStyle}>
          {/* Row 1 */}
          <div style={dateRowStyle}>
            {prevMonthDays.map((date) => (
              <div key={`prev-${date}`} style={dateBubbleStyle(date, true)}>
                {date}
              </div>
            ))}
            <div
              style={dateBubbleStyle(1)}
              onClick={() => handleDateClick(1)}
            >
              1
            </div>
          </div>

          {/* Rows 2-6 */}
          {[
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 29],
          ].map((week, weekIndex) => (
            <div key={weekIndex} style={dateRowStyle}>
              {week.map((date) => (
                <div
                  key={date}
                  style={dateBubbleStyle(date, false, date === 9)}
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                  {date === 9 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: '#7B61FF'
                    }} />
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Last row */}
          <div style={dateRowStyle}>
            <div style={dateBubbleStyle(30)} onClick={() => handleDateClick(30)}>30</div>
            <div style={dateBubbleStyle(31)} onClick={() => handleDateClick(31)}>31</div>
            {nextMonthDays.slice(0, 5).map((date) => (
              <div key={`next-${date}`} style={dateBubbleStyle(date, true)}>
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={buttonsStyle}>
        <button style={buttonStyle(false)}>Cancel</button>
        <button style={buttonStyle(true)}>Apply</button>
      </div>
    </div>
  )
}

export default Calendar
