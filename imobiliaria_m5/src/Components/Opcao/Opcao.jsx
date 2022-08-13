import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Opcao.module.css'
import OpcaoFoto from '../../assets/Opcaofoto/OpcaoFoto.jpg'




const Opcao = () => {

  return (
    <div className={styles.opcao}>
        <h1> A melhor moradia para você aqui</h1>
        <div>
      
        </div>
        <div className={styles.container}>
           <img src={OpcaoFoto} alt='foto main' />
            
        <Link to={'/vendas'}>
        <button className={styles.btn2}>Á Venda</button>
        </Link>
        <Link to={'/aluguel'}>
        <button className={styles.btn2}>Aluguel</button>
        </Link>
        <Link to={'/corretores'}>
        <button className={styles.btn2}>Corretores</button>
        </Link>
        <Link to={'/adm'}>
        <button className={styles.btn2}>Adm</button>
        </Link>
        </div>
        
    </div>
    
  )
}

export default Opcao