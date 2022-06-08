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
                    <p className={Styles.li}>A BeeImóveis está a mais de 6 meses no mercado, 
                        trazendo o que há de melhor no setor imobiliário com competência, 
                        agilidade e comprometimento. entregando satisfação a nossos clientes com intuito de 
                        realizar o sonho da casa própria.
                        Já são mais de 2.000 sonhos realizados!
                    </p>
                </li>

                <li className={Styles.somos}>Missão
                    <p className={Styles.li}>Atender nossos clientes superando suas 
                        expectativas e necessidades sempre com ética e transparência em nossas ações.
                    </p>
                </li>
                
                <li className={Styles.somos}>Visão
                    <p className={Styles.li}>Trabalhamos com os melhores imóveis, nas melhores localizações que porpiciam
                    conforto, segurança e acessibilidade pra você e sua família.
                    </p>
                </li>

                <li className={Styles.somos}>Valores
                    <ul className={Styles.listaDeValores}>

                        <li className={Styles.valoresValor}>Ética
                            <p className={Styles.li}>Temos como base trabalhar com princípios éticos e transparentes
                                gerando confiança a todos os envolvidos na negociação. </p>
                        </li>

                        <li className={Styles.valoresValor}>Competência
                            <p className={Styles.li}>Entender as necessidades e expectativas do cliente proporcionando conforto 
                            e segurança, pois contamos com a melhor equipe de corretores visando qualidade de 
                            vida e conforto em seu novo lar;</p>
                        </li>

                        <li className={Styles.valoresValor}>Inovação
                            <p className={Styles.li}>É e sempre será o diferencial de nossa marca o
                             investimento em novas tecnologias, proporcionando agilidade e eficiência com nossos
                            sistemas seguros e facilitando acesso por cliente, corretores e colaboradores de qualquer lugar.; </p>
                        </li>
                    </ul>
                </li>
            </ul>
                    
        </section>
    </div>
  )
}
