import styles from './App.css';
import React, { useRef } from "react";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import Programacao from './components/Programacao';
import Sobre from './components/Sobre';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import Organizadores from './components/Organizadores';
import OrganizadoresLista from './components/OrganizadoresLista';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Sobre/>
      <Programacao/>      
      <Organizadores/>
      <Localizacao/>
      <OrganizadoresLista/>
      <Footer/>
    </div>
  );
}

export default App;
