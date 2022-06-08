import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from "../../Components/rodape/Rodape";
import styles from './VendasPost.module.css'

function VendasEdit() {

    const { id } = useParams();

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroVenda = data => axios.put(`https://imobiliariaresilia.herokuapp.com/vendas/${id}`, data)
    .then(() => {
        console.log('deu certo')
        history('/vendas');
    })
    .catch(() => {
        console.log("deu errado")
    })


    return (
        <div>
            <Cabecalho />

            <div className={styles.cardPost}>

                <h1>Criar novo registro de venda</h1>
                <div className={styles.linePost}></div>

                <div className={styles.cardBodyPost}>
                    <form onSubmit={handleSubmit(registroVenda)}>

                        <div className={styles.fields}>
                            <label>Tipo</label>
                            <input type="text" name="TIPO" {...register("TIPO")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Valor</label>
                            <input type="text" name="VALOR" {...register("VALOR")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Endereço</label>
                            <input type="text" name="ENDEREÇO" {...register("ENDEREÇO")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Quartos</label>
                            <input type="number" name="QUARTOS" {...register("QUARTOS")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Banheiros</label>
                            <input type="number" name="BANHEIROS" {...register("BANHEIROS")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Garagem</label>
                            <input type="number" name="GARAGEM" {...register("GARAGEM")}></input>
                        </div>

                        <div className={styles.fields}>
                            <label>Tamanho</label>
                            <input type="text" name="TAMANHO" {...register("TAMANHO")}></input>
                        </div>

                        <div className={styles.btnPost}>
                            <button className={styles.btnForm} type="submit">Registrar</button>
                        </div>

                    </form>
                </div>

            </div>

            <Rodape />
        </div>
    )
}

export default VendasEdit;