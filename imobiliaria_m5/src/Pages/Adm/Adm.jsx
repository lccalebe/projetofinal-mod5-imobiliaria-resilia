import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import { Link } from "react-router-dom";
import styles from './Adm.module.css'


function Adm() {

    const [adm, setAdm] = useState([]);

    useEffect(() => {
        axios.get('https://imobiliariaresilia.herokuapp.com/adm/')
        .then((response) => {
            setAdm(response.data)
            console.log('Deu Certo')
        })
        .catch(() => {
            console.log('Deu Errado')
        })
    },[])

    function deleteAdm(id) {
        axios.delete(`https://imobiliariaresilia.herokuapp.com/adm/${id}`)
        
        setAdm(adm.filter(adm => adm.ID !== id))
    }

    return(
        <div>
            <Cabecalho />

            <main>
                <div className={styles.container}>

                    {adm.map((adm, key) => {
                        return (
                            <div className={styles.card}>

                                <header>
                                    <h2>{adm.TIPOPLANO}</h2>                            
                                </header>   

                                <p>Tempo de Contrato: {adm.TEMPOCONTRATO}</p>
                                <p>Taxa de Serviço: {adm.TAXASERVICO}</p>
                                <p>Seguro Incluso: {adm.SEGUROINCLUSO}</p>
                                {/*<img src={adm.IMG1} alt=''/>*/}

                                <div className={styles.Btns}>
                                    
                                    <Link to={{ pathname: `/admEdit/${adm.ID}` }}>
                                        <div className={styles.btnEdit}>
                                            <button>Edit</button>
                                        </div>
                                    </Link>
                                        

                                    <div className={styles.btnDelete}>
                                        <button onClick={() => {deleteAdm(adm.ID)} }>Delete</button>
                                    </div>

                            </div>
                            
                        </div> 
                        )
                    })}
                    <Link to={'/admPost'}>
                <button>Registrar Novo Plano</button>
            </Link>
                </div>
                
            </main>

            <Rodape />
        </div>
    )
}

export default Adm;