import React, { useState } from 'react';
import Styles from '../Cadastro/Cadastro.module.css';
import Cabecalho from '../../Components/Cabecalho/Cabecalho';
import Rodape from '../../Components/rodape/Rodape';
import { Link } from 'react-router-dom';
import Sobre from '../../Components/Sobre/Sobre';


const Manutencao = () => {

    return (
        <section className={Styles.container}>
            <Cabecalho />

            <Sobre/>


            
            <Rodape />
        
        </section>
    )
}

export default Manutencao;