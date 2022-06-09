import React from 'react'
import Styles from './Equipe.module.css'
import jocelia from '../../assets/jocelia.jpg'
import eliane from '../../assets/eliane.jpg'
import luciana from '../../assets/luciana.jpg'
import lucas from '../../assets/lucas.jpg'
import raphael from '../../assets/raphael.jpg'
import Cabecalho from '../../Components/Cabecalho/Cabecalho'
import Rodape from "../../Components/rodape/Rodape"

export const Equipe = () => {
      
  return (
    <div>
          
        <Cabecalho />

        <div className={Styles.titulo}>Nossa equipe</div>
        <div className={Styles.time}> 

            <div className={Styles.eliane}> 
                <span className={Styles.elianeImg}>
                    <img src={eliane} alt="foto Eliane"/>
                    <p>Eliane Cristina</p>
                    <div className={Styles.links}>
                        <div className={Styles.linkedin}>
                            <a href='https://www.linkedin.com/in/eliane-cristina-nunes-correia/'>Linkedin</a>
                        </div>
                        <div className={Styles.GitHub}>
                            <a href='https://github.com/ElianeCristina'>GitHub</a>
                        </div>
                    </div>
                </span>
            </div>

            <div className={Styles.jocelia}> 
                <span className={Styles.joceliaImg}>
                    <img src={jocelia} alt="foto Jocelia"/>
                    <p> Jocelia</p>
                    <div className={Styles.links}>
                        <div className={Styles.linkedin}>
                            <a href='https://www.linkedin.com/in/joceliaoliveira/'>Linkedin</a>
                        </div>
                        <div className={Styles.GitHub}>
                            <a href='https://github.com/JoceliaHora'>GitHub</a>
                        </div>
                    </div>
                </span>
            </div>

            <div className={Styles.luciana}> 
                <span className={Styles.lucianaImg}>
                    <img src={luciana} alt="foto Luciana"/>
                    <p>Luciana</p>
                    <div className={Styles.links}>
                        <div className={Styles.linkedin}>
                            <a href='https://www.linkedin.com/in/luciana-vivarelli-valgode-34640815a/'>Linkedin</a>
                        </div>
                        <div className={Styles.GitHub}>
                            <a href='https://github.com/LucianaVivarelli'>GitHub</a>
                        </div>
                    </div>
                </span>
            </div>

            <div className={Styles.lucas}> 
                <span className={Styles.lucasImg}>
                    <img src={lucas} alt="foto Lucas"/>
                    <p>Lucas Caleb</p>
                    <div className={Styles.links}>
                        <div className={Styles.linkedin}>
                            <a href='https://www.linkedin.com/in/lucascalebe/'>Linkedin</a>
                        </div>
                        <div className={Styles.GitHub}>
                            <a href='https://github.com/lccalebe'>GitHub</a>
                        </div>
                    </div>
                </span>
            </div>

            <div className={Styles.raphael}> 
                <span className={Styles.raphaelImg}>
                    <img src={raphael} alt="foto raphael"/>
                    <p>Raphael</p>
                    <div className={Styles.links}>
                        <div className={Styles.linkedin}>
                            <a href='https://www.linkedin.com/in/raphael-victor-pereira-vicentini-10a81272/'>Linkedin</a>
                        </div>
                        <div className={Styles.GitHub}>
                            <a href='https://github.com/raphaelvicentini'>GitHub</a>
                        </div>
                    </div>
                </span>
            </div>

        </div> 

        <Rodape />

    </div>
 
  )
}

export default Equipe;
