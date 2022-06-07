import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Opcao.module.css'
{/* import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg' */}



const Opcao = () => {

  return (
    <div className={styles.opcao}>
        <h1> A melhor moradia para você aqui</h1>
        <div>
         <p>
            <span className={styles.negrito}>Ver mais</span>
         </p>
         <p>Comercial</p>
         <p>Residencial</p>
         <p>Aluguel</p>
        </div>
        <div className={styles.container}>
           {/*  <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' /> */}
        </div>
        <Link to={'/corretores'}>
        <button className={styles.btn2}>View All</button>
        </Link>
    </div>
    
  )
}

export default Opcao