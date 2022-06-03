import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import styles from'./NavBar.module.css'

const NavBar = () => {

   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)


  return (
    <div className={styles.navBar}>
        <div className={styles.containerNav}>
          <h1>
              <span><BsFillHouseFill/>Imobiliaria</span>M5
          </h1>
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

export default NavBar