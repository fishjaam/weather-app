import React from 'react';

import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  
  return (
      <React.Fragment>
        <Backdrop show={props.showModal} clicked={props.modalClosed}/>
        <div className={styles.Modal}>
            <div>
              <h2 className={styles.Header}>{props.city}</h2>
              <img 
                className={styles.Image}
                src={props.icon}
                alt={'Loading...'}/>
            </div>
            <p>{props.description}</p>
            <p>Current Temperature: {props.temperature}</p>
            <p>Wind: {props.windSpeed} {props.windDirection}</p>
            
        </div>
      </React.Fragment>
  )
}


export default modal;