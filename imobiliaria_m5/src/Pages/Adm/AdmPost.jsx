import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import BeeImoveis from'../../assets/BeeImoveis.png'

function AdmPost() {

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroAdm = data => axios.post("https://imobiliariaresilia.herokuapp.com/adm/", data)
    .then(() => {
        console.log("Deu Certo")
        history('/adm')
    })
    .catch(() => {
        console.log("Deu errado")
    })

    return (
        <div>
            <Cabecalho />

            <div className={Styles.container}>

                <h1 className={Styles.titulo}>Criar novo registro ADM</h1>
                <div className={Styles.containerInicio}>

                <div>
                <div className={Styles.titulo}> 
                <span className={Styles.formTitulo}>
                <img className={Styles.bee} src={BeeImoveis} alt="Casa com familia"/>
                </span>
                </div>

                
                    <form className={Styles.baseForm} onSubmit={handleSubmit(registroAdm)}>

                        <div className={Styles.formularios}>
                            <label>Tipo de Plano</label>
                            <input className={Styles.input} type="text" name="TIPOPLANO" {...register("TIPOPLANO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Tempo de contrato</label>
                            <input className={Styles.input} type="number" name="TEMPOCONTRATO" {...register("TEMPOCONTRATO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Taxa de Serviço</label>
                            <input className={Styles.input} type="number" name="TAXASERVICO" {...register("TAXASERVICO")}></input>
                        </div>

                        <div className={Styles.formularios}>
                            <label>Seguro Incluso</label>
                            <input className={Styles.input} type="number" name="SEGUROINCLUSO" {...register("SEGUROINCLUSO")}></input>
                        </div>
                        
                        <div className="btn-post">
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

export default AdmPost;