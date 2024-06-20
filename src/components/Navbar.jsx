import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from "../images/logo_seprog.png";
import '../fonts/Assistant/static/Assistant-Medium.ttf';
import {Link} from 'react-scroll'
import textologo from '../images/TextLogoTitle.png';

function Navbar() { 

  return (
  <div className={styles.navbarContainer}>
    <div className={styles.navbar}>
      <div className={styles.navbarConteudo}>

        <Link activeClass="active" to="hero" spy={true} smooth={true}>
        <div className={styles.navLogo}>
            <a href="#hero">
            <img src={logo} alt="Logo da SEPROG" className={styles.logo}/>
            <img src={textologo} alt="Título SEPROG" />
            </a>
        </div>
        </Link>
        

        <ul className={styles.navMenu}> 
          <Link activeClass="active" to="sobre" spy={true} smooth={true}>
            <div className={ styles.navItem }>
              Sobre
            </div>
          </Link>

          <Link activeClass="active" to="programacao" spy={true} smooth={true}>
            <div className={ styles.navItem }>
              Programação
            </div>
          </Link>

          <Link activeClass="active" to="organizadores" spy={true} smooth={true}>
            <div className={ styles.navItem }>
              Palestrantes
            </div>
          </Link>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar