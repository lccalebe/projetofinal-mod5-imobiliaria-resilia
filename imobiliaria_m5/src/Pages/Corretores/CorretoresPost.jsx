import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import BeeImoveis from'../../assets/BeeImoveis.png'
import Styles from './Corretores.module.css'

function CorretoresPost() {

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroCorretores = data => axios.post("https://imobiliariaresilia.herokuapp.com/corretores/", data)
    .then(() => {
        console.log("Deu Certo")
        history('/corretores')
    })
    .catch((err) => {
        console.log("Deu errado")
        console.log(err)
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

               
                    <form className={Styles.baseForm} onSubmit={handleSubmit(registroCorretores)}>

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
                            <input className={Styles.input} type="text" name="SENHA" {...register("SENHA")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>ID Corretor</label>
                            <input className={Styles.input} type="number" name="CODIGO" {...register("CODIGO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Comissão por Venda</label>
                            <input className={Styles.input} type="number" name="COMICAOPORVENDA" {...register("COMICAOPORVENDA")}></input>
                        </div>
                        
                        <div >
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

export default CorretoresPost;