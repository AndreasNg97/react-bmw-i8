import React from 'react'
import "./App.css"
import Landingpage from './components/s1-Landingpage/Landingpage'
import Sophisto from './components/s2-Sophisto/Sophisto'
import Interior from './components/s3-Interior/Interior'
import Interior2 from './components/s4-Interior2/Interior2'
import Specs from './components/s5-Specs/Specs'

function App(){
  return(
    <div className="App">
      <div className="snap"> <Landingpage /> </div>
      <div className="snap"> <Sophisto /> </div>
      <div className="snap"> <Interior /> </div>
      <div className="snap"> <Interior2 /> </div>
      <div className="snap"> <Specs /> </div>
    </div>
  )
}

export default App