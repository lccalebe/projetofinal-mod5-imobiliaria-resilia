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
                    <h3> Home </h3>
                    <p> Empresa </p>
                    <p> Publicidade </p>
                    <p> Sustentabilidade </p>

                </div>
                <div className={styles.col}>
                    <h3> Cadastro </h3>
                    <p> Trabalhe Conosco </p>
                    <p> Filiais </p>
                    <p> Equipe de Design</p>
                    <p></p>


                </div>
                <div className={styles.col}>
                    <h3> Sobre </h3>
                    <p> Jurídico </p>
                    <p> Equipe de Design </p>
                    <p> Parcelamentos </p>

                </div>

                <div className={styles.col}>
                    <h3> Contato </h3>
                    <p> Boletos </p>
                    <p> Consórcio </p>
                    <p> Politica de Privacidade</p>
                </div>
            </div>
        </div>
    )
}

export default Footer