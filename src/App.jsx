import { useState } from 'react'
import './App.css'
import Menu from './components/menu/menu'
import Home from './pages/home/home'
import Vr from './pages/vr/vr'
import Creations from './pages/creations/creations'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Menu />
      <Home />
      <Vr />
      <Creations />
      <Footer />
    </>
  )
}

export default App
