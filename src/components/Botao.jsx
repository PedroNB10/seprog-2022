import React from 'react'
import styles from '../styles/Botao.module.css';

export default function Botao(props) {
  return (
        <button className={styles.btn} onClick={() => window.open(props.url)}>
          <img src={props.img} alt="mão clicando" className={styles.btnImg}/>
          <div className={styles.btnText}>
            {props.texto}
          </div>
        </button>
  )
}