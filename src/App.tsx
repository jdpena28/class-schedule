import React from 'react'
import Header from './components/Header'
import Schedules from './components/Schedule'
import Footer from './components/Footer'


const App:React.FC = () => {
  return (
    <div className="mx-auto w-full">
      <Header/>
      <Schedules/>
      <Footer/>
    </div>
  )
}

export default App