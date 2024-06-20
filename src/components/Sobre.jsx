import React from 'react'
import styles from '../styles/Sobre.module.css';
import apresentacao from "../images/apresentacao.png";

function Sobre() {
  return (
    <div id='sobre' className={styles.sobre}>
      <div className={styles.conteudo}>
        <img src={apresentacao} alt="Homem ensinando para uma sala cheia de pessoas" className={styles.image}/>
        <div className={styles.texts}>
          <div className={styles.linha}>
            <p className={styles.title}>
              Sobre a SEPROG
            </p>
          </div>
          <p className={styles.subtitle}>
            Faça parte dessa evolução!
          </p>
          <p className={styles.text}>
            Com sua primeira edição em 2021 no formato EAD, a Semana de Programação vem se tornando um grande evento realizado pelo Instituto de Matemática e Computação da UNIFEI, com o objetivo de mostrar e ensinar conteúdos incríveis, muito fortes no ramo profissional, de uma forma prática, para todos os alunos na universidade.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sobre