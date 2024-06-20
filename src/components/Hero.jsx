import React from 'react'
import styles from '../styles/Hero.module.css';
import blockgroups from "../images/BlockGroups.png"
import "../fonts/ProductSans/ProductSans-Black.ttf"
import "../fonts/ProductSans/ProductSans-Light.ttf"
import "../fonts/ProductSans/ProductSans-Medium.ttf"
import Botao from './Botao'
import clique from "../images/clique.png";


function Hero() {
  return (
    <div id='hero' className={styles.hero}>
      <div className={styles.conteudo}>
          <div className={styles.intro}>
            <div className={styles.textIntro}>
              <p className={styles.textTitle}>
                II Semana da Programação
              </p>
              <p className={styles.text}>
                Se atualize com a evolução da tecnologia! Será uma semana de aprendizados em desenvolvimento web, visão computacional, programação em jogos e maratona de programação!
              </p>
              <Botao url={'https://sigaa.unifei.edu.br/sigaa/public/extensao/loginCursosEventosExtensao.jsf'} texto={'Garanta já sua vaga!'} img={clique}/>
            </div>
            <a href="https://drive.google.com/file/d/11l22OkcPh9dLHNe2BFno7mTbPkh_NRK0/view" target='_blank' className={styles.link}>Como eu me inscrevo?</a>
          </div>
          <img src={blockgroups} alt="blockgroups" className={styles.blockgroups}/>
      </div>
    </div>
  )
}

export default Hero