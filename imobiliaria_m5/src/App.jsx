import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Hero/Hero'
import Best from './Components/best/Best'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Best />
     
    </div>
  )
}

export default App
