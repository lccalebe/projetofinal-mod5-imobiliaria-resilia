import React from 'react'

import styles from './Featured.module.css'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bath2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'

const Featured = () => {
    return (
        <div className={styles.featured}>
            <h1 className={styles.featuredText}>Top Featured Listings</h1>
            <p className={styles.featured}>Selected listings by City, State, & Zip based on views.</p>
            <div className={styles.container}>
                <img className={`${styles.span3} ${styles.imageGridRow2}`} src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className={`${styles.span3} ${styles.imgDetails}`}>
                    <div className={styles.top}>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className={styles.price}>$2,677,000</p>
                    </div>
                    <div className={styles.infoGrid}>
                        <div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Quarto:</p><p>4</p>
                            </div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Banheiros:</p><p>5</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Metro Quadrado:</p><p>12,09890</p>
                            </div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Est Payment:</p><p>$27,919/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.span2} ${styles.rightImgDetails}`}>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className={styles.btn}>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className={styles.container}>
                <img className={styles.order2}  src={Bed3} alt='' />
                <img className={styles.order3}  src={Bed4} alt='' />

                <img className={`${styles.span3} ${styles.imageGridrow2 } ${styles.order1}`} src={House2} alt='' />


                <img className={styles.order4}  src={Bath2} alt='' />
                <img className={styles.order5} src={LivingRoom} alt='' />

                <div className={`${styles.span2} ${styles.rightImgDetails } ${styles.order7}`}>
                    <p>Uma linda manhã para se passar com a familia no lugar dos seus sonhos, localizado no coração da Zona Sul, Leblon </p>
                    <button className={styles.btn}>Veja nossos destaques Luxury</button>
                </div>


                <div className={`${styles.span3} ${styles.rightImgDetails } ${styles.order6}`}>
                    <div className={styles.top}>
                        <h2>Alto Leblon, 98</h2>
                        <p>Casa á venda</p>
                        <p className={styles.price}>$4,500,000</p>
                    </div>
                    <div className={styles.infoGrid}>
                        <div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Quartos:</p><p>5</p>
                            </div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Banheiros:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Metro quadrado:</p><p>8,138</p>
                            </div>
                            <div className={styles.informacoes}>
                                <p className={styles.negrito}>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured