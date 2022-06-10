import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import BeeImoveis from'../../assets/BeeImoveis.png'
import Styles from './Corretores.module.css'

function CorretoresEdit() {

    const { id } = useParams();

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroCorretores = data => axios.put(`https://imobiliariaresilia.herokuapp.com/corretores/${id}`, data)
    .then(() => {
        console.log('deu certo')
        history('/corretores');
    })
    .catch(() => {
        console.log("deu errado")
    })

    return (
        <div>
            <Cabecalho />

            <div className={Styles.container}>

                <h1 className={Styles.titulo}>Criar novo registro de Corretor</h1>
                <div className={Styles.containerInicio}>

                <div>
                <div className={Styles.titulo}> 
                <span className={Styles.formTitulo}>
                <img className={Styles.bee} src={BeeImoveis} alt="Casa com familia"/>
                </span>
                </div>

                    <form onSubmit={handleSubmit(registroCorretores)}>

                        <div className={Styles.formularios}>
                            <label>Nome</label>
                            <input className={Styles.input} type="text" name="NOME" {...register("NOME")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>E-mail</label>
                            <input className={Styles.input} type="text" name="EMAIL" {...register("EMAIL")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>SENHA</label>
                            <input className={Styles.input}  type="text" name="SENHA" {...register("SENHA")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>ID Corretor</label>
                            <input className={Styles.input} type="number" name="CODIGO" {...register("CODIGO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Comissão por Venda</label>
                            <input className={Styles.input} type="number" name="COMICAOPORVENDA" {...register("COMICAOPORVENDA")}></input>
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

export default CorretoresEdit;