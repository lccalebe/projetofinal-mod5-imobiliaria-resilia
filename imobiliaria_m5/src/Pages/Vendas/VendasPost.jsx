import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'

function VendasPost() {

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroVenda = data => axios.post("https://imobiliariaresilia.herokuapp.com/vendas/", data)
    .then(() => {
        console.log("Deu Certo")
        history('/vendas')
    })
    .catch(() => {
        console.log("Deu errado")
    })

    return (
        <div>
            <Cabecalho />

            <div className="card-post">

                <h1>Criar novo registro de venda</h1>
                <div className="line-post"></div>

                <div className="card-body-post">
                    <form onSubmit={handleSubmit(registroVenda)}>

                        <div className="fields">
                            <label>Tipo</label>
                            <input type="text" name="TIPO" {...register("TIPO")}></input>
                        </div>

                        <div className="fields">
                            <label>Valor</label>
                            <input type="text" name="VALOR" {...register("VALOR")}></input>
                        </div>

                        <div className="fields">
                            <label>Endereço</label>
                            <input type="text" name="ENDEREÇO" {...register("ENDEREÇO")}></input>
                        </div>

                        <div className="fields">
                            <label>Quartos</label>
                            <input type="number" name="QUARTOS" {...register("QUARTOS")}></input>
                        </div>

                        <div className="fields">
                            <label>Banheiros</label>
                            <input type="number" name="BANHEIROS" {...register("BANHEIROS")}></input>
                        </div>

                        <div className="fields">
                            <label>Garagem</label>
                            <input type="number" name="GARAGEM" {...register("GARAGEM")}></input>
                        </div>

                        <div className="fields">
                            <label>Tamanho</label>
                            <input type="text" name="TAMANHO" {...register("TAMANHO")}></input>
                        </div>

                        <div className="btn-post">
                            <button type="submit">Registrar</button>
                        </div>

                    </form>
                </div>

            </div>

            <Rodape />
        </div>
    )
}

export default VendasPost;