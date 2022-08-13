import { useState } from 'react'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import FiltroHeader from './Components/FiltroHeader/FiltroHeader'
import Opcao from './Components/Opcao/Opcao'
import Rodape from './Components/rodape/Rodape'
import styles from './App.module.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Cabecalho />
      <FiltroHeader />
      <Opcao />
      <Rodape />    
    </div>
  )
}

export default App
