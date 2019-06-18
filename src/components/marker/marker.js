import React from 'react';

import styles from './Marker.module.css';

const ms = {
  height: '30px',
  width: '30px',
  margin: '-40px -14px'
}
const marker = props => {
    
  return (
      <div className={styles.Marker}>
        <img 
            className={styles.Img} 
            src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
            alt={props.title} 
            onClick={props.displayCityDetails}/>
        <h3>{props.title}</h3>
      </div>
  )
}


export default marker;