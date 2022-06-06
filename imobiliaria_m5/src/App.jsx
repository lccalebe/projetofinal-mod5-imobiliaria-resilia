import { useState } from 'react'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import FiltroHeader from './Components/FiltroHeader/FiltroHeader'
import Opcao from './Components/Opcao/Opcao'
import Featured from './Components/Featured/Featured'
import Rodape from './Components/rodape/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cabecalho />
      <FiltroHeader />
      <Opcao />
      <Featured />
      <Rodape />
    
    </div>
  )
}

export default App
