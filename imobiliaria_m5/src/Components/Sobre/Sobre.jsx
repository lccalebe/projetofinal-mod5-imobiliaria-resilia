import React, { useState } from 'react';
import Styles from './Sobre.module.css';

export const Sobre = () => {

  return (
    <div className={Styles.sobre}>
        < div className={Styles.titulo}>
            É sobre...
        </div>
        <section className={Styles.topicos}>
            <ul className={Styles.lista}>

                <li className={Styles.somos}>Quem somos
                    <p className={Styles.li}>Há mais de 6 meses no mercado da Resília Educação, trazendo o que há de melhor no universo 
                        imobiliário com competência e entregando satisfação e conforto de um lar para chamar de seu, e os melhores pontos
                        comerciais aos clientes mais exigentes.
                    </p>
                </li>

                <li className={Styles.somos}>Missão
                    <p className={Styles.li}>Satisfazer as expectativas e necessidades de nossos clientes com ética, 
                        qualidade e total transparência em nossas ações relacionadas ao mercado Imobiliário;
                    </p>
                </li>
                
                <li className={Styles.somos}>Visão
                    <p className={Styles.li}>Ter como marca o reconhecimento de ser uma empresa tradicionalmente ética, respeitada, 
                        admirada e reconhecida como a melhor opção por clientes e 
                        colaboradores sem abrir mão da inovação em seus empreendimentos, na qualidade do atendimento e realização de sonhos.
                        Para tanto, investimos em novas tecnologias proporcionando agilidade e eficiência com sites seguros
                        capazes de serem acessados em qualquer lugar; 
                    </p>
                </li>

                <li className={Styles.somos}>Valores
                    <ul className={Styles.listaDeValores}>
                        <li className={Styles.valoresValor}>Competência
                            <p className={Styles.li}>Entender as necessidades e expectativas do cliente com o intuito de realizar sonhos;</p>
                        </li>
                        <li className={Styles.valoresValor}>Inovação
                            <p className={Styles.li}>É e sempre será o diferencial de nossa marca; </p>
                        </li>
                        <li className={Styles.valoresValor}>Confiança
                            <p className={Styles.li}>Temos como base trabalhar com princípios éticos e transparentes
                                gerando confiança a todos os envolvidos na negociação. </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
  )
}
