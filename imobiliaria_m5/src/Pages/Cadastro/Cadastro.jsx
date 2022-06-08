import React, { useState } from 'react';
import Styles from './Cadastro.module.css';
import BeeImoveis from'../../assets/BeeImoveis.png'
import Cabecalho from '../../Components/Cabecalho/Cabecalho';
import Rodape from '../../Components/rodape/Rodape';
import { Link } from 'react-router-dom';


const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

  return (
        <section className={Styles.container}>
            <Cabecalho />
            <div className={Styles.containerInicio}>
            
                {/*Titulo e imagem*/}
                <div className={Styles.titulo}> 
                    <span className={Styles.formTitulo}>Cadastre-se!
                        <img src={BeeImoveis} alt="Casa com familia"/>
                    </span>
                </div>
            
                {/*forms*/}
                <form className={Styles.baseForm}>

                    {/*forms-email*/}
                    <div className={Styles.formularios}>
                        <input className={nome !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="name" value={nome} onChange={e => setNome(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="Nome"></label> 
                    </div>

                    {/*forms-email*/}
                    <div className={Styles.formularios}>
                        <input className={email !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="E-mail"></label> 
                    </div>
                    

                    {/*forms-senha*/}
                    <div className={Styles.formularios}>
                        <input className={senha !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                        <span className={Styles.focusInput} data-placeholder="Password"></span>
                    </div>
                
                    {/*forms-botão*/}
                    <div className={Styles.containerFormulariosBtn}>
                        <button className={Styles.formulariosBtn}>Cadastro</button>
                    </div>
                </form>

                    {/*Mudar para Login*/}
                <div className={Styles.textoCentro}>
                    <span className={Styles.texto1}>Já possui cadastro?</span>
                    <Link to={'/login'}>
                    <p className={Styles.texto2} >Faça seu login!</p>
                    </Link>
                </div>

            </div>
            <Rodape />
        
        </section>
    )
}

export default Cadastro;