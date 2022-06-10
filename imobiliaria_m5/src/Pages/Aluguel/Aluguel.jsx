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

                    {aluguel.map((aluguel, key) => {
                        return (
                            <div className='card'>

                                <header>
                                    <h2>{aluguel.ALUGUELTIPO}</h2>                            
                                </header>   

                                <p>Valor: {aluguel.VALOR}</p>
                                <p>Endereço: {aluguel.ENDERECO}</p>
                                <p>ID Corretor: {aluguel.CORRETORID}</p>
                                <p>ID Proprietario: {aluguel.PROPRIETARIOID}</p>
                                <p>ID Inquilino: {aluguel.INQUILINOID}</p>
<<<<<<< HEAD
                                <img src={aluguel.IMG1} alt=''/>
                                <img src={aluguel.IMG2} alt=''/>
=======
                                <img className={styles.image} src={aluguel.IMG1} alt=''/>
>>>>>>> f8c03cbde3a4f024412f5ea4ad7fc254bea912dd

                                <div className='btns'>
                                    
                                    <Link to={{ pathname: `/aluguelEdit/${aluguel.ID}` }}>
                                        <div className='btn-edit'>
                                            <button>Edit</button>
                                        </div>
                                    </Link>
                                        

                                    <div className='btn-delete'>
                                        <button onClick={() => {deleteAluguel(aluguel.ID)} }>Delete</button>
                                    </div>

                            </div>
                        </div> 
                        )
                    })}
                    
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