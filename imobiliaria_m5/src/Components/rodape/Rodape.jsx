import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'
import styles from './Rodape.module.css'
import { Link} from 'react-router-dom'

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
                <Link to={"/"}><h3> Home </h3></Link>
                    <p> Empresa </p>
                    <p> Publicidade </p>
                    <p> Sustentabilidade </p>
                </div>

                <div className={styles.col}>
                    <Link to={"/cadastro"}><h3> Cadastro </h3></Link>
                    <p> Trabalhe Conosco </p>
                    <p> Filiais </p>
                    <p> Franquias </p>
                </div>

                <div className={styles.col}>
                <Link to={"/sobre"}><h3> Sobre </h3></Link>
                    <p> Jurídico </p>
                    <p> Equipe de Design </p>
                    <p> Parcelamentos </p>
                </div>

                <div className={styles.col}>
                <Link to={"/equipe"}><h3> Contato </h3></Link>
                    <p> Boletos </p>
                    <p> Consórcio </p>
                    <p> Politica de Privacidade</p>
                </div>
            </div>
        </div>
    )
}

export default Footer