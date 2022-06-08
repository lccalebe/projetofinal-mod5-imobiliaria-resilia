import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import styles from './VendasPost.module.css'

function VendasPost() {

    let history = useNavigate();

    const { register, handleSubmit} = useForm();

    const registroVenda = data => axios.post("https://imobiliariaresilia.herokuapp.com/vendas/", data)
    .then(() => {
        console.log("Deu Certo")
        history('/vendas')
    })
    .catch(() => {
        console.log("Deu errado")
    })

    return (
        <div>
            <Cabecalho />
           {/* Aba de Registro de nova Venda */}
            <div className={styles.cardPost}>

                <h1 className={styles.tituloRv}>Criar novo registro de venda</h1>
                <div className={styles.linePost}></div>

                <div className={styles.cardBodypost}>
                    <form onSubmit={handleSubmit(registroVenda)}>

                        <div className={styles.formularios}>
                            <label>Tipo:</label>
                            <input type="text" name="TIPO" {...register("TIPO")}></input>
                        </div>

                        <div className={styles.formularios}>
                            <label>Valor:</label>
                            <input type="text" name="VALOR" {...register("VALOR")}></input>
                        </div>

                        <div className={styles.formularios}>
                            <label>Endereço</label>
                            <input type="text" name="ENDEREÇO" {...register("ENDEREÇO")}></input>
                        </div>

                        <div className={styles.formularios}>
                            <label>Quartos:</label>
                            <input type="number" name="QUARTOS" {...register("QUARTOS")}></input>
                        </div>

                        <div className={styles.formularios}>
                            <label>Banheiros:</label>
                            <input type="number" name="BANHEIROS" {...register("BANHEIROS")}></input>
                        </div>

                        <div className={styles.formularios}>
                            <label>Garagem:</label>
                            <input type="number" name="GARAGEM" {...register("GARAGEM")}></input>
                        </div>

                        <div className={styles.formularios}>
                            <label>Tamanho:</label>
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

export default VendasPost;