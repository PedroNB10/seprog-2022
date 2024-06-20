import React, { useState } from 'react';
import styles from '../styles/Programacao.module.css'
import DatasContainer from './DatasContainer.jsx'
import ConteudoContainer from './ConteudoContainer';
import Botao from './Botao'
import agenda from '../images/calendario.png'
// <a href="https://www.flaticon.com/br/icones-gratis/calendario" title="calendário ícones">Calendário ícones criados por Freepik - Flaticon</a>

export default function Programacao() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id='programacao' className={styles.programacao}>
      <div className={styles.titulo}>Programação</div>
      <div className={styles.programacaoContainer}>
        <div className={styles.datas}>
          <DatasContainer selectedIndex={selectedIndex} dataIndex={0} setSelectedIndex={setSelectedIndex}></DatasContainer>
          <DatasContainer selectedIndex={selectedIndex} dataIndex={1} setSelectedIndex={setSelectedIndex}></DatasContainer>
          <DatasContainer selectedIndex={selectedIndex} dataIndex={2} setSelectedIndex={setSelectedIndex}></DatasContainer>
          <DatasContainer selectedIndex={selectedIndex} dataIndex={3} setSelectedIndex={setSelectedIndex}></DatasContainer>
          <DatasContainer selectedIndex={selectedIndex} dataIndex={4} setSelectedIndex={setSelectedIndex}></DatasContainer>
        </div>

        <div className={styles.conteudo}>
            <ConteudoContainer selectedIndex={selectedIndex}></ConteudoContainer>
        </div>
      </div>
        <div className={styles.btn}>
          <Botao url={'https://docs.google.com/spreadsheets/d/1LE-5_zAzhCGJFRi1memh95oTGimSK9nvmbM5wyV4z_o/edit?usp=sharing'} texto={'Confira a agenda da SEPROG 2022 aqui!'} img={agenda}/>
        </div>
    </div>
  )
}
