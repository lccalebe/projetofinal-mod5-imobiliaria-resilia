import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import styles from './Rodape.module.css'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <FaFacebook className={styles.icon} />
                <FaInstagram className={styles.icon} />
                <FaTwitter className={styles.icon} />
                <FaPinterest className={styles.icon} />
            </div>
            <div className={styles.container}>
                <div className={styles.col}>
                    <h3>Sobre </h3>
                    <p>Empresa </p>
                    <p>Detalhes </p>
                    <p>Planejamento </p>
                    <p>Quem somos</p>
                </div>
                <div className={styles.col}>
                    <h3>Empresa </h3>
                    <p>Empresa </p>
                    <p>Detalhes </p>
                    <p>Planejamento</p>
                    <p>Quem somos</p>
                </div>

        </div>
        </div>
    )
}

export default Footer