import React, { useState, useEffect } from 'react';
import styles from '../styles/DatasContainerOrg.module.css'

export default function DatasContainerOrg(props) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (props.selectedIndex === props.dataIndex) {
            setSelected(true);
        } else {
            setSelected(false);
        }
      }, [props.selectedIndex]);

    let stylesClasses = `${styles.data}`
    if(selected) {
        stylesClasses = `${styles.data} ${styles.dataSelecionada}`;
    } else {
        stylesClasses = `${styles.data}`;
    }

    const renderData = () => {
        switch(props.dataIndex){
            case 0:
                return (
                    <div className={styles.texto}>19/09</div>
                )
                break;
            case 1:
                return (
                    <div className={styles.texto}>20/09</div>
                )
                break;
            case 2:
                return (
                    <div className={styles.texto}>21/09</div>
                )
                break;
            case 3:
                return (
                    <div className={styles.texto}>22/09</div>
                )
                break;
            case 4:
                return (
                    <div className={styles.texto}>23/09</div>
                )
                break;
        }
    }

    return (
        <div onClick={ () => props.setSelectedIndex(props.dataIndex) } className={stylesClasses}>
            {renderData()}
        </div>
    )
}
