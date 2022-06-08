import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'

function AdmEdit() {

    const { id } = useParams();

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroAdm = data => axios.put(`https://imobiliariaresilia.herokuapp.com/adm/${id}`, data)
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

            <div className="card-post">

                <h1>Criar novo registro ADM</h1>
                <div className="line-post"></div>

                <div className="card-body-post">
                    <form onSubmit={handleSubmit(registroAdm)}>

                        <div className="fields">
                            <label>Tipo de Plano</label>
                            <input type="text" name="TIPOPLANO" {...register("TIPOPLANO")}></input>
                        </div>

                        <div className="fields">
                            <label>Tempo de contrato</label>
                            <input type="number" name="TEMPOCONTRATO" {...register("TEMPOCONTRATO")}></input>
                        </div>

                        <div className="fields">
                            <label>Taxa de Serviço</label>
                            <input type="number" name="TAXASERVICO" {...register("TAXASERVICO")}></input>
                        </div>

                        <div className="fields">
                            <label>Seguro Incluso</label>
                            <input type="number" name="SEGUROINCLUSO" {...register("SEGUROINCLUSO")}></input>
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

export default AdmEdit;