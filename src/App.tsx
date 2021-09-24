import React from 'react'
import Header from './components/Header'
import Schedules from './components/Schedule'


const App:React.FC = () => {
  return (
    <div className="mx-auto w-full">
      <Header/>
      <Schedules/>
    </div>
  )
}

export default App