import React from 'react'
import styles from '../styles/OrganizadoresLista.module.css'

export default function OrganizadoresLista() {
  return (
    <div className={styles.orgLista}>
        <div className={styles.titulo}>Coordenação</div>
        <ul className={styles.lista}>
            <li>Profª. Elisa de Cássia Silva Rodrigues</li>
            <li>Prof. Bruno Guazzelli Batista</li>
            <li>Profª. Lina María Garcés Rodríguez</li>
            <li>Profª. Melise Maria Veiga De Paula</li>
        </ul>
        <div className={styles.titulo}>Colaboração</div>
        <ul className={styles.lista}>
            <li>Ana Maísa Do Nascimento Santos</li>
            <li>Anna Luiza Pereira Rosa</li>
            <li>Bárbara Alves De Paiva Barbosa</li>
            <li>Bárbara Pimenta Caetano</li>
            <li>Brenda Bonfim Solera</li>
            <li>Caique Brandani</li>
            <li>Camila Motta Renó</li>
            <li>Débora César Bertini</li>
            <li>Flávio Belizário Da Silva Mota</li>
            <li>Gabriel Da Silva Henrique</li>
            <li>Gianluca Borges Mendes</li>
            <li>Guilherme Teodoro Moreira Leite</li>
            <li>Hellen Cristina Andrade Napoleao</li>
            <li>João Lucas Lopes Dias</li>
            <li>Jonas Henrique Ribeiro Paula</li>
            <li>Letícia Vitória Dos Santos</li>
            <li>Marcus Felipe Novaes Silva</li>
            <li>Samuel Antonio Fernandes</li>
            <li>Stanley Andrade Senne</li>
            <li>Ytalo Ysmaicon Gomes</li>
        </ul>
    </div>
  )
}
