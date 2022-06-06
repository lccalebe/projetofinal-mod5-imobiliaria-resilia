import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BiBuildingHouse} from 'react-icons/bi'
import styles from'./Cabecalho.module.css'

const Cabecalho = () => {

   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)


  return (
    <div className={styles.cabecalho}>
        <div className={styles.containerCab}>
          <h2>
              <span><BiBuildingHouse/>Bee</span>.Imoveis
          </h2>
          <button className={styles.btn}>Sign In</button>
          <ul className={`${styles.navMenu} ${click &&styles.active}`}>

              <li><a href='#'>Home</a></li>
              <li><a href='#'>Pesquisar</a></li>
              <li><a href='#'>Sobre</a></li>
              <li><a href='#'>Contato</a></li>

          </ul>
          <div className={styles.ElTracitos} onClick={handleClick}>
              {click ? (<FaRegTimesCircle className={styles.icon}/>) : (<HiOutlineMenuAlt4 className={styles.icon}/>)}
              
          </div>
        </div>
    </div>
  )
}

export default Cabecalho