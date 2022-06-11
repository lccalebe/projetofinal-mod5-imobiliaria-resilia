import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import styles from './Aluguel.module.css'

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

            <div className={styles.cardPost}>

                <h1>Criar novo registro de venda</h1>
                <div className={styles.linePost}></div>

                <div className={styles.cardBodyPost}>
                    <form onSubmit={handleSubmit(registroAluguel)}>

                        <div className={styles.fields}>
                            <label>Tipo</label>
                            <input type="text" name="AluguelTIPO" {...register("ALUGUELTIPO")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Valor</label>
                            <input type="text" name="VALOR" {...register("VALOR")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Endereço</label>
                            <input type="text" name="ENDERECO" {...register("ENDERECO")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>ID Corretor</label>
                            <input type="number" name="CORRETORID" {...register("CORRETORID")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>ID Proprietario</label>
                            <input type="number" name="PROPRIETARIOID" {...register("PROPRIETARIOID")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>ID Inquilino</label>
                            <input type="number" name="INQUILINOID" {...register("INQUILINOID")}></input>
                        </div>
                        
                        <div className={styles.btnPost}>
                            <button type="submit">Registrar</button>
                        </div>

                    </form>
                </div>

            </div>

            <Rodape />
        </div>
    )
}

export default AluguelEdit;