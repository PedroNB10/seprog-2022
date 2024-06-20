import React from 'react'
import style from '../styles/Localizacao.module.css';
import mapa from "../images/mapa.png";

function Localizacao() {
  return (
    <div className={style.localizacao}>
      <ul className={style.conteudo}>
        <li className={style.title}>
          Localização do evento
        </li>
        <li>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.430216405294!2d-45.45194278567129!3d-22.412827626064544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb7cadb1247d9b%3A0xf74fb46a1edf2072!2sUniversidade%20Federal%20de%20Itajub%C3%A1%2C%20Campus%20Prof.%20Jos%C3%A9%20Rodrigues%20Seabra!5e0!3m2!1spt-BR!2sbr!4v1663101188121!5m2!1spt-BR!2sbr" title='Localização da Unifei' className={style.map}></iframe>
        </li>
        <li>
          <img src={mapa} alt="pino amarelo sobre um mapa amarelo"  className={style.img}/>
        </li>
        <li className={style.infosTitle}>
          SEPROG
        </li>
        <li className={style.infosAdressUnifei}>
          Universidade Federal de Itajubá
        </li>
        <li className={style.infosAdressPlace}>
          Avenida B P S, 1303 - Pinheirinho
        </li>
        <li className={style.infosAdressCity}>
          Itajubá - MG
        </li>
      </ul>
    </div>
  )
}

export default Localizacao