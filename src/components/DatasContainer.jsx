import React, { useState, useEffect } from 'react';
import styles from '../styles/DatasContainer.module.css'

export default function DatasContainer(props) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (props.selectedIndex === props.dataIndex) {
            setSelected(true);
        } else {
            setSelected(false);
        }
      }, [props.selectedIndex]);

    let stylesClasses = `${styles.datasContainer}`

    if(selected) {
        stylesClasses = `${styles.datasContainer} ${styles.dataSelecionada}`;
    } else {
        stylesClasses = `${styles.datasContainer}`;
    }

    switch (props.dataIndex) {
        case 0:
            stylesClasses=stylesClasses+` ${styles.datasContainerInicio}`;
            break;
        case 4:
            stylesClasses=stylesClasses+` ${styles.datasContainerFim}`;
            break;
        default:
            stylesClasses=stylesClasses+` ${styles.datasContainerMeio}`;
            break;
    }

    const renderDatas = () => {
        switch(props.dataIndex){
            case 0:
                return(
                    <div>
                        <div className={styles.dataTitulo}>Segunda-feira (19/09)</div>               
                    </div>
                )
                break;
            case 1:
                return (
                    <div>
                        <div className={styles.dataTitulo}>Terça-feira (20/09)</div>
                    </div>
                )
                break;
            case 2:
                return (
                    <div>
                        <div className={styles.dataTitulo}>Quarta-feira (21/09)</div>
                    </div>
                )
                break;
            case 3:

                return (
                    <div>
                        <div className={styles.dataTitulo}>Quinta-feira (22/09)</div>
                    </div>
                )
                break;
            case 4:
                return (
                    <div>
                        <div className={styles.dataTitulo}>Sexta-feira (23/09)</div>
                    </div>
                )
                break;
        }
    }

  return (
    <div onClick={ () => props.setSelectedIndex(props.dataIndex) } className={stylesClasses}>
        {renderDatas()}
    </div>
  )
}
