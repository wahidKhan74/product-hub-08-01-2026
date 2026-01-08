import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
