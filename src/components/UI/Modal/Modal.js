import React from 'react';

import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    
  return (
      <React.Fragment>
        <Backdrop show={props.showModal} clicked={props.modalClosed}/>
        <div className={styles.Modal}>
            <p>{props.city}: {props.description}</p>
            <p>Current Temperature: {props.temperature}</p>
            <p>Humidity: </p>
            <p>Wind: </p>
            <p>Precipitation: </p>
        </div>
      </React.Fragment>
  )
}


export default modal;