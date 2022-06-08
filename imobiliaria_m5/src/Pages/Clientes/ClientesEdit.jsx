import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'

function ClienteEdit() {

    const { id } = useParams();

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroCliente = data => axios.put(`https://imobiliariaresilia.herokuapp.com/cliente/${id}`, data)
    .then(() => {
        console.log("Deu Certo")
        history('/cliente')
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
                    <form onSubmit={handleSubmit(registroCliente)}>

                        <div className="fields">
                            <label>Nome</label>
                            <input type="text" name="NOME" {...register("NOME")}></input>
                        </div>

                        <div className="fields">
                            <label>CPF</label>
                            <input type="text" name="CPF" {...register("CPF")}></input>
                        </div>

                        <div className="fields">
                            <label>Telefone</label>
                            <input type="text" name="TELEFONE" {...register("TELEFONE")}></input>
                        </div>

                        <div className="fields">
                            <label>Endereço</label>
                            <input type="text" name="ENDERECO" {...register("ENDERECO")}></input>
                        </div>

                        <div className="fields">
                            <label>Tipo de Imovel</label>
                            <input type="text" name="TIPO_DE_IMOVEL" {...register("TIPO_DE_IMOVEL")}></input>
                        </div>

                        <div className="fields">
                            <label>Condição do Imovel</label>
                            <input type="text" name="CONDICAO_DO_IMOVEL" {...register("CONDICAO_DO_IMOVEL")}></input>
                        </div>

                        <div className="fields">
                            <label>E-mail</label>
                            <input type="text" name="EMAIL" {...register("EMAIL")}></input>
                        </div>

                        <div className="fields">
                            <label>Senha</label>
                            <input type="text" name="SENHA" {...register("SENHA")}></input>
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

export default ClienteEdit;