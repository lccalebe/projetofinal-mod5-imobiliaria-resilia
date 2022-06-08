import React, { useState } from 'react';
import Styles from '../Cadastro/Cadastro.module.css';
import Cabecalho from '../../Components/Cabecalho/Cabecalho';
import Rodape from '../../Components/rodape/Rodape';
import { Link } from 'react-router-dom';


const Manutencao = () => {

    return (
        <section className={Styles.container}>
            <Cabecalho />
            <div className={Styles.containerInicio}>
            
                {/*Titulo e imagem*/}
                <div className={Styles.titulo}> 
                    <span className={Styles.formTitulo}>
                        Ops! estamos em manutenção!!
                    </span>
                </div>
            
                {/*forms*/}
                <div className={Styles.textoCentro}>
                    <Link to={'/'}>
                    <p className={Styles.texto2} >Voltar!</p>
                    </Link>
                </div>

 
            </div>
            <Rodape />
        
        </section>
    )
}

export default Manutencao;