import React from 'react'
import styles from './Best.module.css'
import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'



const Best = () => {
  return (
    <div className={styles.best}>
        <h1> Find Best Rated Properties</h1>
        <div>
         <p>
             <span className={styles.bold}>View All</span>
             </p>
         <p>Comercial</p>
         <p>Residencial</p>
         <p>Loft</p>
        </div>
        <div className={styles.container}>
            <img src={Apt1} alt='' />
            <img src={Apt2} alt='' />
            <img src={Apt3} alt='' />
        </div>
        <button className={styles.btn2}>View All</button>
    </div>
    
  )
}

export default Best