import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import { Link } from "react-router-dom";
import Styles from './Adm.module.css'


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

            <main  className={Styles.container}>

                <h1 className={Styles.titulo}>Administração</h1>
                
                <div className={Styles.containerInicio}>

                    {adm.map((adm, key) => {
                        return (
                            <div className={Styles.card}>

                                <header>
                                    <h2>{adm.TIPOPLANO}</h2>                            
                                </header>   

                                <p>Tempo de Contrato: {adm.TEMPOCONTRATO}</p>
                                <p>Taxa de Serviço: {adm.TAXASERVICO}</p>
                                <p>Seguro Incluso: {adm.SEGUROINCLUSO}</p>
                                {/*<img src={adm.IMG1} alt=''/>*/}

                                <div className={Styles.btns}>
                                    
                                    <Link to={{ pathname: `/admEdit/${adm.ID}` }}>
                                        <div className={Styles.btnEdit}>
                                            <button>Edit</button>
                                        </div>
                                    </Link>
                                        

                                    <div className={Styles.btnDelete}>
                                        <button onClick={() => {deleteAdm(adm.ID)} }>Delete</button>
                                    </div>

                            </div>
                        </div> 
                        )
                    })}
                    
                </div>
            </main>

            <Link to={'/admPost'}>
                <button>Registrar Novo Plano</button>
            </Link>

            <Rodape />
        </div>
    )
}

export default Adm;