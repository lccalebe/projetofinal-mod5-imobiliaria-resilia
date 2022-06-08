import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './FiltroHeader.module.css'
// por valor maximo pra ficar estatico max-width

const FiltroHeader = () => {
  return (
    <div className={styles.filtroHeader}>
      <div className={styles.content}>
        <h1 className={styles.titulon}>Ache o lugar perfeito para você</h1>
        <p className={styles.findText}>Search the lagest selection of luxury high-rise apartaments, multi-family homes, and luxury homes</p>
        <form className={styles.procurar}>
          <div>
           <input type='text' placeholder= 'Enter Keyword..' />
         </div>
         <div className={styles.radio}>
           <input type='radio' name='Input_Radio'/>
           <label>Compra</label>
           <input type='radio' name='Input_Radio' />
           <label>Aluguel</label>
           <button type='submit'>
             <AiOutlineSearch className={styles.icon} />
             </button>

         </div>


        </form>
        <div>
<<<<<<< HEAD
          <Link to={'/login'}>
            <button className={styles.btn}>Sign In</button>
          </Link>
=======
        
        <button className={styles.btn}>Sign In</button>
        
>>>>>>> 93b3be2db5d46ae371d822a0d85bbed11eda7a7c
        </div>
      </div>
    </div>
  )
}

export default FiltroHeader