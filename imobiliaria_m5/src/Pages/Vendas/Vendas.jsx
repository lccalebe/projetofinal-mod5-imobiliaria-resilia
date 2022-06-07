import React, { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'


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
        <div>
            <Cabecalho />

            <main>
                <div className="cards">

                    {vendas.map((vendas, key) => {
                        return (
                            <div className='card'>

                                <header>
                                    <h2>{vendas.TIPO}</h2>                            
                                </header>   

                                <p>Valor: {vendas.VALOR}</p>
                                <p>Endereço: {vendas.ENDEREÇO}</p>
                                <p>Quartos: {vendas.QUARTOS}</p>
                                <p>Banheiros: {vendas.BANHEIROS}</p>
                                <p>Garagem: {vendas.GARAGEM}</p>
                                <p>Tamanho: {vendas.TAMANHO}</p>
                                {/*<img src={vendas.IMG1} alt=''/>*/}

                                <div className='btns'>
                                    
                                        <div className='btn-edit'>
                                            <button>Edit</button>
                                        </div>
                                        

                                    <div className='btn-delete'>
                                        <button onClick={() => {deleteVenda(vendas.ID)} }>Delete</button>
                                    </div>

                            </div>
                        </div> 
                        )
                    })}
                    
                </div>
            </main>

            <Rodape />
        </div>
    )
}

export default Vendas;