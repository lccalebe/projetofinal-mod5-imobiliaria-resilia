import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'

function CorretoresPost() {

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroCorretores = data => axios.post("https://imobiliariaresilia.herokuapp.com/corretores/", data)
    .then(() => {
        console.log("Deu Certo")
        history('/corretores')
    })
    .catch(() => {
        console.log("Deu errado")
    })

    return (
        <div>
            <Cabecalho />

            <div className="card-post">

                <h1>Criar novo registro de Corretor</h1>
                <div className="line-post"></div>

                <div className="card-body-post">
                    <form onSubmit={handleSubmit(registroCorretores)}>

                        <div className="fields">
                            <label>Nome</label>
                            <input type="text" name="NOME" {...register("NOME")}></input>
                        </div>

                        <div className="fields">
                            <label>E-mail</label>
                            <input type="text" name="EMAIL" {...register("EMAIL")}></input>
                        </div>

                        <div className="fields">
                            <label>SENHA</label>
                            <input type="text" name="SENHA" {...register("SENHA")}></input>
                        </div>

                        <div className="fields">
                            <label>ID Corretor</label>
                            <input type="number" name="CODIGO" {...register("CODIGO")}></input>
                        </div>

                        <div className="fields">
                            <label>Comissão por Venda</label>
                            <input type="number" name="COMICAOPORVENDA" {...register("COMICAOPORVENDA")}></input>
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

export default CorretoresPost;