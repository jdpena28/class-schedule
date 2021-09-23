import React from 'react'
import Header from './components/Header'
import Daily from './components/Daily'

const App:React.FC = () => {
  return (
    <div className="container mx-auto w-full">
      <Header/>
      <Daily day = 'Monday' subject ='hello' time = '1-2:30'/>
    </div>
  )
}

export default App