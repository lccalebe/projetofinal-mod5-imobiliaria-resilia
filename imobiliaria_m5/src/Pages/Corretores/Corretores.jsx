import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import { Link } from "react-router-dom";
import styles from './Corretores.module.css'


function Corretores() {

    const [corretores, setCorretores] = useState([]);

    useEffect(() => {
        axios.get('https://imobiliariaresilia.herokuapp.com/corretores/')
        .then((response) => {
            setCorretores(response.data)
            console.log("DEU CERTO")
        })
        .catch(() => {
            console.log('Deu Errado')
        })
    },[])

    function deleteCorretor(id) {
        axios.delete(`https://imobiliariaresilia.herokuapp.com/corretores/${id}`)
        
        setCorretores(corretores.filter(corretores => corretores.ID !== id))
    }

    return(
        <div>
            <Cabecalho />

            <main>
                <div className={styles.container}>

                    {corretores.map((corretores, key) => {
                        return (
                            <div className={styles.card}>

                                <header>
                                    <h2>{corretores.NOME}</h2>                            
                                </header>   

                                <p>E-mail: {corretores.EMAIL}</p>
                                <p>Senha: {corretores.SENHA}</p>
                                <p>ID Corretor: {corretores.CODIGO}</p>
                                <p>Comição por Venda: {corretores.COMICAOPORVENDA}</p>
                                {/*<img src={corretores.IMG1} alt=''/>*/}

                                <div className={styles.Btns}>
                                    
                                    <Link to={{ pathname: `/corretoresEdit/${corretores.ID}` }}>
                                        <div className={styles.btnEdit}>
                                            <button>Edit</button>
                                        </div>
                                    </Link>
                                        

                                    <div className={styles.btnDelete}>
                                        <button onClick={() => {deleteCorretor(corretores.ID)} }>Delete</button>
                                    </div>

                            </div>
                            
                        </div>
                         
                        )
                    })}
                     <Link to={'/corretoresPost'}>
                      <button>Registrar Novo Corretor</button>
                     </Link>
                </div>
                
            </main>

           

            <Rodape />
        </div>
    )
}

export default Corretores;