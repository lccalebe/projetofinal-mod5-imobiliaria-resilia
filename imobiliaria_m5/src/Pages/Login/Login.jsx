import React, { useState } from 'react';
import Styles from '../Cadastro/Cadastro.module.css';
import BeeImoveis from'../../assets/BeeImoveis.png'
import Cabecalho from '../../Components/Cabecalho/Cabecalho';
import Rodape from '../../Components/rodape/Rodape';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    return (
        <section className={Styles.container}>
            <Cabecalho />
            <div className={Styles.containerInicio}>
            
                {/*Titulo e imagem*/}
                <div className={Styles.titulo}> 
                    <span className={Styles.formTitulo}>Login
                        <img src={BeeImoveis} alt="Casa com familia"/>
                    </span>
                </div>
            
                {/*forms*/}
                <form className={Styles.baseForm}>

                    {/*forms-email*/}
                    <div className={Styles.formularios}>
                        {/*if ternario para a condição do valor do input vazio*/}
                        <input className={email !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} type="email" 
                        value={email} onChange={e => setEmail(e.target.value)}/>
                        <span className={Styles.focusInput} data-placeholder="E-mail"></span> 
                    </div>
                    

                    {/*forms-senha*/}
                    <div className={Styles.formularios}>
                        <input className={senha !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                        <span className={Styles.focusInput} data-placeholder="Password"></span>
                    </div>
                
                    {/*forms-botão*/}
                    <div className={Styles.containerFormulariosBtn}>
                        <button className={Styles.formulariosBtn}>Entrar</button>
                    </div>
                </form>

                    {/*Mudar para Cadastro*/}
                <div className={Styles.textoCentro}>
                    <span className={Styles.texto1}>Não possui cadastro?</span>
                    <Link to={'/cadastro'}>
                    <p className={Styles.texto2} >Cadastre-se aqui!</p>
                    </Link>
                </div>

            </div>
            <Rodape />
        
        </section>
    )
}

export default Login;