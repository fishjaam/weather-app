import React from 'react';

import styles from './Marker.module.css';
import cloudy from '../../assets/cloudy.png'
import sunny from '../../assets/sunny.png'
import lightning from '../../assets/lightning.png'



const marker = props => {
    
  return (
      <div className={styles.Marker}>
        <img 
            className={styles.Img} 
            src={lightning}
            // src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
            alt={props.title} 
            onClick={props.displayCityDetails}/>
      </div>
  )
}


export default marker;