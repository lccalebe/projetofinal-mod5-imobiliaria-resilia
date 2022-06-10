import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './FiltroHeader.module.css'
// por valor maximo pra ficar estatico max-width

const FiltroHeader = () => {
  return (
    <div className={styles.filtroHeader}>
      <div className={styles.content}>

        <h1 className={styles.titulon}>Encontre a moradia dos seus sonhos</h1>
        <p className={styles.findText}>Pesquise aqui a melhor opção para você</p>

        <form className={styles.procurar}>
          <div>
           <input type='text' placeholder= 'Enter Keyword..' />
          </div>
          <div className={styles.radio}>
            <input type='radio' name='Input_Radio' checked/>
            <label>Compra</label>
            <input type='radio' name='Input_Radio' />
            <label>Aluguel</label>
            <Link to={"/vendas"}>
              <button type='submit'>
                <AiOutlineSearch className={styles.icon} />
              </button>
            </Link>

         </div>


        </form>
        <div>
        <Link to={'/Login'}>
          <button className={styles.btn}>Sign In</button>
        </Link>
        
        </div>
      </div>
    </div>
  )
}

export default FiltroHeader