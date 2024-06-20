import styles from '../styles/Organizadores.module.css'
import React, { Component, useState, useEffect } from 'react';
import DatasContainerOrg from './DatasContainerOrg.jsx';
import ConteudoContainerOrg from './ConteudoContainerOrg.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Organizadores() {
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <div id='organizadores' className={styles.organizadores}>
      <div className={styles.titulo}>Palestrantes</div>
      <div className={styles.datasContainer}>
        <DatasContainerOrg selectedIndex={selectedIndex} dataIndex={0} setSelectedIndex={setSelectedIndex}></DatasContainerOrg>
        <DatasContainerOrg selectedIndex={selectedIndex} dataIndex={1} setSelectedIndex={setSelectedIndex}></DatasContainerOrg>
        <DatasContainerOrg selectedIndex={selectedIndex} dataIndex={2} setSelectedIndex={setSelectedIndex}></DatasContainerOrg>
        <DatasContainerOrg selectedIndex={selectedIndex} dataIndex={3} setSelectedIndex={setSelectedIndex}></DatasContainerOrg>
        <DatasContainerOrg selectedIndex={selectedIndex} dataIndex={4} setSelectedIndex={setSelectedIndex}></DatasContainerOrg>
      </div>
      <div className={styles.organizadoresContainer}>
        <ConteudoContainerOrg selectedIndex={selectedIndex}/>
      </div>

      
    </div>
  )
}
