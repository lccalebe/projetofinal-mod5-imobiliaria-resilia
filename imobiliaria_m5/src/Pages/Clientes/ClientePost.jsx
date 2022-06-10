import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import BeeImoveis from'../../assets/BeeImoveis.png'

function ClientePost() {

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroCliente = data => axios.post("https://imobiliariaresilia.herokuapp.com/cliente/", data)
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

            <div className={Styles.container}>

                <h1 className={Styles.titulo}>Criar novo registro de Cliente</h1>
                <div className={Styles.containerInicio}>

                <div>
                <div className={Styles.titulo}> 
                <span className={Styles.formTitulo}>
                <img className={Styles.bee} src={BeeImoveis} alt="Casa com familia"/>
                </span>
                </div>
                    <form className={Styles.baseForm} onSubmit={handleSubmit(registroCliente)}>

                        <div className={Styles.formularios}>
                            <label>Nome</label>
                            <input className={Styles.input} type="text" name="NOME" {...register("NOME")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>CPF</label>
                            <input className={Styles.input} type="text" name="CPF" {...register("CPF")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Telefone</label>
                            <input className={Styles.input} type="text" name="TELEFONE" {...register("TELEFONE")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Endereço</label>
                            <input className={Styles.input} type="text" name="ENDERECO" {...register("ENDERECO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Tipo de Imovel</label>
                            <input className={Styles.input} type="text" name="TIPO_DE_IMOVEL" {...register("TIPO_DE_IMOVEL")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Condição do Imovel</label>
                            <input className={Styles.input} type="text" name="CONDICAO_DO_IMOVEL" {...register("CONDICAO_DO_IMOVEL")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>E-mail</label>
                            <input className={Styles.input} type="text" name="EMAIL" {...register("EMAIL")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Senha</label>
                            <input className={Styles.input} type="text" name="SENHA" {...register("SENHA")}></input>
                        </div>

                        <div>
                            <button type="submit">Registrar</button>
                        </div>

                    </form>
                </div>
                </div>
            </div>

            <Rodape />
        </div>
    )
}

export default ClientePost;