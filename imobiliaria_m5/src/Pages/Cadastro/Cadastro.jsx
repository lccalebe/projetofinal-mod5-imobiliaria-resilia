import React, { useState } from 'react';
import Styles from './Cadastro.module.css';
import BeeImoveis from'../../assets/BeeImoveis.png'
import Cabecalho from '../../Components/Cabecalho/Cabecalho';
import Rodape from '../../Components/rodape/Rodape';
import { Link } from 'react-router-dom';


const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [tipoDeImovel, setTipoDeImovel] = useState("")
    const [condicaoDoImovel, setCondicaoDoImovel] = useState("")
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

                    {/*forms-CPF*/}
                    <div className={Styles.formularios}>
                        <input className={cpf !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="number" value={cpf} onChange={e => setCpf(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="CPF"></label> 
                    </div>

                    {/*forms-telefone*/}
                    <div className={Styles.formularios}>
                        <input className={telefone !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="tel" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="Telefone"></label> 
                    </div>

                    {/*forms-endereço*/}
                    <div className={Styles.formularios}>
                        <input className={endereco !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="text" value={endereco} onChange={e => setEndereco(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="Endereço"></label> 
                    </div>

                    {/*forms-Tipo de Imovel*/}
                    <div className={Styles.formularios}>
                        <input className={tipoDeImovel !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="text" value={tipoDeImovel} onChange={e => setTipoDeImovel(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="Tipo de Imovel"></label> 
                    </div>

                    {/*forms-Condição do Imovel*/}
                    <div className={Styles.formularios}>
                        <input className={condicaoDoImovel !== "" ? `${Styles.hasValue} ${Styles.input}` : Styles.input} 
                        type="text" value={condicaoDoImovel} onChange={e => setCondicaoDoImovel(e.target.value)}/>
                        <label className={Styles.focusInput} data-placeholder="Condição do Imovel"></label> 
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
                        <button className={Styles.formulariosBtn} type='submit'>Cadastro</button>
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