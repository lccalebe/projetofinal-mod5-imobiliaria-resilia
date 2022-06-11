import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import { Link } from "react-router-dom";
import styles from './Aluguel.module.css'


function Aluguel() {

    const [aluguel, setAluguel] = useState([]);

    useEffect(() => {
        axios.get('https://imobiliariaresilia.herokuapp.com/aluguel/')
        .then((response) => {
            setAluguel(response.data)
            console.log('Deu Certo')
        })
        .catch(() => {
            console.log('Deu Errado')
        })
    },[])

    function deleteAluguel(id) {
        axios.delete(`https://imobiliariaresilia.herokuapp.com/aluguel/${id}`)
        
        setAluguel(aluguel.filter(aluguel => aluguel.ID !== id))
    }

    return(
        <div>
            <Cabecalho />

            <main>
                <div className={styles.container}>
                    <div className={styles.titulo}>Aluguel</div>
                    <div className={styles.containerInicio}>

                        {aluguel.map((aluguel, key) => {
                            return (
                                <div className={styles.card}>
                                    <div className={styles.dados}>
                                        <header>
                                            <h2>{aluguel.ALUGUELTIPO}</h2>                            
                                        </header>   
                                    
                                        <p>Valor: {aluguel.VALOR}</p>
                                        <p>Endereço: {aluguel.ENDERECO}</p>
                                        <p>ID Corretor: {aluguel.CORRETORID}</p>
                                        <p>ID Proprietario: {aluguel.PROPRIETARIOID}</p>
                                        <p>ID Inquilino: {aluguel.INQUILINOID}</p>
                                    </div>
                                    <div className={styles.imagem}>
                                            <img className={styles.img} src={aluguel.IMG1} alt=''/>
                                    </div>

                                    <div className={styles.btns}>
                                    
                                        <Link to={{ pathname: `/aluguelEdit/${aluguel.ID}` }}>
                                            <div className={styles.btnEdit}>
                                            <button>Edit</button>
                                            </div>
                                        </Link>
                                        

                                        <div className={styles.btnDelete}>
                                            <button onClick={() => {deleteAluguel(aluguel.ID)} }>Delete</button>
                                        </div>

                                    </div>
                                </div> 
                            )
                         })}
                    </div>
                    
                </div>
            </main>

            <Link to={'/aluguelPost'}>
                <button>Registrar Novo Imovel</button>
            </Link>

            <Rodape />
        </div>
    )
}

export default Aluguel;