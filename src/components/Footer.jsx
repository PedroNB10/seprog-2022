import React from 'react'
import styles from '../styles/Footer.module.css';
import unifei from "../images/unifei.png";
import imc from "../images/imc.png";
import logo from "../images/logo_seprog.png";
import devbsol from "../images/devbsol.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.conteudo}>
        <ul className={styles.envolvidos}>
              <li className={styles.unifei}>
                <img src={unifei} alt="logo da unifei" />
              </li>
              <li className={styles.seprog}>
                <img src={logo} alt="logo da SEPROG" className={styles.logoSeprog}/>
                <p className={styles.textSeprog}>SEPROG</p>
                <p className={styles.textYear}>2022</p>
                <p className={styles.textCopyright}>Todos os direitos reservados</p>
              </li>
            <li className={styles.unifei}> 
              <div className={styles.centro}>
                <img src={imc} alt="logo do IMC - Instituto de Matemática e Computação" />  
              </div>         
            </li>
        </ul>
        <div className={styles.copyright}>
          <img src={devbsol} alt="Desenvolvido por byron.solutions" className={styles.img}/>
        </div>
      </div>
    </div>
  )
}

export default Footer