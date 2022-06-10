import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import { Link } from "react-router-dom";


function Cliente() {

    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        axios.get('https://imobiliariaresilia.herokuapp.com/cliente/')
        .then((response) => {
            setCliente(response.data)
            console.log('Deu Certo')
        })
        .catch((err) => {
            console.log('Deu Errado')
            console.log(err)
        })
    },[])

    function deleteCliente(id) {
        axios.delete(`https://imobiliariaresilia.herokuapp.com/cliente/${id}`)
        
        setCliente(cliente.filter(cliente => cliente.ID !== id))
    }

    return(
        <div>
            <Cabecalho />

            <main>
                <div className={styles.container}>

                    {cliente.map((cliente, key) => {
                        return (
                            <div className={styles.card}>

                                <header>
                                    <h2>{cliente.NOME}</h2>                            
                                </header>   

                                <p>CPF: {cliente.CPF}</p>
                                <p>Telefon: {cliente.TELEFONE}</p>
                                <p>Endereço: {cliente.ENDERECO}</p>
                                <p>Tipo de Imovel: {cliente.TIPO_DE_IMOVEL}</p>
                                <p>Condição do Imovel: {cliente.CONDICAO_DO_IMOVEL}</p>
                                <p>E-mail: {cliente.EMAIL}</p>
                                <p>Senha: {cliente.SENHA}</p>
                                {/*<img src={cliente.IMG1} alt=''/>*/}

                                <div className={styles.Btns}>
                                    
                                    <Link to={{ pathname: `/clienteEdit/${cliente.ID}` }}>
                                        <div className={styles.btnEdit}>
                                            <button>Edit</button>
                                        </div>
                                    </Link>
                                        

                                    <div className={styles.btnDelete}>
                                        <button onClick={() => {deleteCliente(cliente.ID)} }>Delete</button>
                                    </div>

                            </div>
                        </div> 
                        )
                    })}
                    
                </div>
            </main>

            <Link to={'/clientePost'}>
                <button>Registrar Novo Cliente</button>
            </Link>

            <Rodape />
        </div>
    )
}

export default Cliente;