import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Ache o lugar perfeito para você</h1>
        <p className={styles.findText}>Search the lagest selection of luxury high-rise apartaments, multi-family homes, and luxury homes</p>
        <form className={styles.search}>
          <div>
           <input type='text' placeholder= 'Enter Keyword..' />
         </div>
         <div className={styles.radio}>
           <input type='radio' checked />
           <label>Compra</label>
           <input type='radio' />
           <label>Aluguel</label>
           <button type='submit'>
             <AiOutlineSearch className={styles.icon} />
             </button>

         </div>


        </form>
      </div>
    </div>
  )
}

export default Hero