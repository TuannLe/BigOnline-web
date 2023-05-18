import { useState } from 'react'
import './App.css'
import Header from './presentation/components/Header'
import Container from './presentation/pages/container'
import Footer from './presentation/components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App
