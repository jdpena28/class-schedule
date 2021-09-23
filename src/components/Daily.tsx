import React from 'react'

export const Daily:React.FC<DailyProps> = ({day,subject,time,meetingLink}) => {
  return (
      <div className = "bg-yellow-100 mx-20">
        <h2>{day}</h2>
        <h3>{subject}</h3>
        <p>{time}</p>
      </div>
  )
}
export default Daily