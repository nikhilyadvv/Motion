import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Main/Hero'
import Features from './components/Main/Features'
import Testimonial from './components/Main/Testimonial'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
    </>
  )
}

export default App
