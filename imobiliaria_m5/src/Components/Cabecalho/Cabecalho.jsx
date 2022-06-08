import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BiBuildingHouse} from 'react-icons/bi'
import styles from'./Cabecalho.module.css'
import BeeImoveis from'../../assets/BeeImoveis.png'
import { Link } from 'react-router-dom'

const Cabecalho = () => {

   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)


  return (
    <div className={styles.cabecalho}>
        <div className={styles.containerCab}>
          <h2>
              <span><img className={styles.LogoBee} src={BeeImoveis} alt='' /></span>
          </h2>
          
          <ul className={`${styles.navMenu} ${click &&styles.active}`}>

              <Link to={'/'}>
                <li><a href='#'>Home</a></li>
              </Link>
              <Link to={'/Cadastro'}>
                <li><a href='#'>Cadastro</a></li>
              </Link>
              <Link to={'/Sobre'}>
                <li><a href='#'>Sobre</a></li>
              </Link>
              <Link to={'/Corretor'}>
                <li><a href='#'>Contato</a></li>
                </Link>

          </ul>
          <div className={styles.ElTracitos} onClick={handleClick}>
              {click ? (<FaRegTimesCircle className={styles.icon}/>) : (<HiOutlineMenuAlt4 className={styles.icon}/>)}
              
          </div>
        </div>
    </div>
  )
}

export default Cabecalho