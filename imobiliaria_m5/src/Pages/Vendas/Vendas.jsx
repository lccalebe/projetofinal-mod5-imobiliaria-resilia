import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import { Link } from "react-router-dom";
import styles from './Vendas.module.css'


function Vendas() {

    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        axios.get('https://imobiliariaresilia.herokuapp.com/vendas/')
        .then((response) => {
            setVendas(response.data)
            console.log('Deu Certo')
        })
        .catch(() => {
            console.log('Deu Errado')
        })
    },[])

    function deleteVenda(id) {
        axios.delete(`https://imobiliariaresilia.herokuapp.com/vendas/${id}`)
        
        setVendas(vendas.filter(vendas => vendas.ID !== id))
    }

    return(
        <div >
            <Cabecalho />

            <main>
                <div className={styles.container}>

                    {vendas.map((vendas, key) => {
                        return (
                            <div className={styles.card}>

                                <header>
                                    <h2>{vendas.TIPO}</h2>                            
                                </header>   
                               <div className={styles.divcard}>
                                <p>Valor: {vendas.VALOR}</p>
                                <p>Endereço: {vendas.ENDEREÇO}</p>
                                <p>Quartos: {vendas.QUARTOS}</p>
                                <p>Banheiros: {vendas.BANHEIROS}</p>
                                <p>Garagem: {vendas.GARAGEM}</p>
                                <p>Tamanho: {vendas.TAMANHO}</p>
                                {/*<img src={vendas.IMG1} alt=''/>*/}
                                </div>
                                <div className={styles.Btns}>
                                    
                                    <Link to={{ pathname: `/vendasEdit/${vendas.ID}` }}>
                                        <div className={styles.btnEdit}>
                                            <button className={styles.btnForm}>Edit</button>
                                        </div>
                                    </Link>
                                        

                                    <div className={styles.btnDelete}>
                                        <button className={styles.btnForm} onClick={() => {deleteVenda(vendas.ID)} }>Delete</button>
                                    </div>

                            </div>
                        </div> 
                        )
                    })}
                    
                </div>
            </main>

            <Link to={'/vendasPost'}>
                <button className={styles.btnForm}>Registrar Novo Imovel</button>
            </Link>

            <Rodape />
        </div>
    )
}

export default Vendas;