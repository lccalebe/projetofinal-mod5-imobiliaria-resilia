import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import Styles from './Aluguel.module.css'
import BeeImoveis from'../../assets/BeeImoveis.png'

function AluguelEdit() {

    const { id } = useParams();

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroAluguel = data => axios.put(`https://imobiliariaresilia.herokuapp.com/aluguel/${id}`, data)
    .then(() => {
        console.log("Deu Certo")
        history('/aluguel')
    })
    .catch(() => {
        console.log("Deu errado")
    })

    return (
        <div>
            <Cabecalho />

            <div className={Styles.container}>

                <h1 className={Styles.titulo}>Criar novo registro de venda</h1>
                <div className={Styles.containerInicio}>

                <div>
                <div className={Styles.titulo}> 
                <span className={Styles.formTitulo}>
                <img className={Styles.bee} src={BeeImoveis} alt="Casa com familia"/>
                </span>
                </div>

                
                    <form className={Styles.baseForm} onSubmit={handleSubmit(registroAluguel)}>

                        <div className={Styles.formularios}>
                            <label>Tipo</label>
                            <input className={Styles.input} type="text" name="AluguelTIPO" {...register("ALUGUELTIPO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Valor</label>
                            <input className={Styles.input} type="text" name="VALOR" {...register("VALOR")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Endereço</label>
                            <input className={Styles.input} type="text" name="ENDERECO" {...register("ENDERECO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>ID Corretor</label>
                            <input className={Styles.input} type="number" name="CORRETORID" {...register("CORRETORID")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>ID Proprietario</label>
                            <input className={Styles.input} type="number" name="PROPRIETARIOID" {...register("PROPRIETARIOID")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>ID Inquilino</label>
                            <input className={Styles.input} type="number" name="INQUILINOID" {...register("INQUILINOID")}></input>
                        </div>
                        
                        <div className={Styles.containerFormulariosBtn}>
                            <button className={Styles.btnForm} type="submit">Registrar</button>
                        </div>

                    </form>
                </div>
                </div>
            </div>

            <Rodape />
        </div>
    )
}

export default AluguelEdit;