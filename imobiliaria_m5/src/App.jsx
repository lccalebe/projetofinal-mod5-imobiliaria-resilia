import { useState } from 'react'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import FiltroHeader from './Components/FiltroHeader/FiltroHeader'
import Opcao from './Components/Opcao/Opcao'
import Featured from './Components/Featured/Featured'
import Rodape from './Components/rodape/Rodape'
import Cadastro from './Components/Cadastro/Cadastro'
import Login from './Components/Cadastro/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cabecalho />
      <FiltroHeader />
      <Opcao />
      <Featured />
      <Rodape />
      <Cadastro/>
      <Login/>
    </div>
  )
}

export default App
