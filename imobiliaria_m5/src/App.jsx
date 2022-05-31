import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      //aqui começamos o show
    </div>
  )
}

export default App
