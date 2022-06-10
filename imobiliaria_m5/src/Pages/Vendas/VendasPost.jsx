import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Rodape from '../../Components/rodape/Rodape'
import Styles from './VendasPost.module.css'
import BeeImoveis from'../../assets/BeeImoveis.png'

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

        <div className={Styles.container}>

            <h1 className={Styles.titulo1}>Criar novo registro de venda</h1>
            <div className={Styles.containerInicio}>

            <div>
            <div className={Styles.titulo}> 
            <span className={Styles.formTitulo}>
            <img className={Styles.bee} src={BeeImoveis} alt="Casa com familia"/>
            </span>
            </div>
            
                <form className={Styles.baseForm} onSubmit={handleSubmit(registroVenda)}>

                    <div className={Styles.formularios}>
                        <label>Tipo</label>
                        <input className={Styles.input} type="text"  name="TIPO" {...register("TIPO")}></input>
                    </div>

                    <div className={Styles.formularios}>
                        <label>Valor</label>
                        <input className={Styles.input} type="text" name="VALOR" {...register("VALOR")}></input>
                    </div>

                    <div className={Styles.formularios}>
                        <label>Endereço</label>
                        <input  className={Styles.input} type="text" name="ENDEREÇO" {...register("ENDEREÇO")}></input>
                    </div>

                    <div className={Styles.formularios}>
                        <label>Quartos</label>
                        <input  className={Styles.input} type="number"  name="QUARTOS" {...register("QUARTOS")}></input>
                    </div>

                    <div className={Styles.formularios}>
                        <label>Banheiros</label>
                        <input  className={Styles.input} type="number"  name="BANHEIROS" {...register("BANHEIROS")}></input>
                    </div>

                    <div className={Styles.formularios}>
                        <label>Garagem</label>
                        <input  className={Styles.input}
                        type="number"   name="GARAGEM" {...register("GARAGEM")}></input>
                    </div>

                    <div className={Styles.formularios}>
                        <label>Tamanho</label>
                        <input  className={Styles.input}
                        type="text" name="TAMANHO" {...register("TAMANHO")}></input>
                    </div>

                    <div className={Styles.containerFormulariosBtn}>
                        <button className={Styles.formulariosBtn} type="submit">Registrar</button>
                    </div>

                </form>
            </div>
            </div>
        </div>

        <Rodape />
    </div>
)
}

export default VendasPost;