import React from 'react'
import styles from './PropertyCard.module.css'

const PropertyCard = (props) => {
  return (
    <div className={styles.PropertyCard}> 
     <div className={styles.imgdiv} >
        <center><img src={props.img} alt="" /></center>
     </div>
     <div className={styles.price}>
        <div className={styles.villatype}> {props.villatype}</div>
         <div className={styles.villaprice}>{props.villaprice}</div>
     </div>
     <div className={styles.features}>
        <div className={styles.featuretitle}> {props.location} </div>
        <div className={styles.featuredescription}>
            <p>Bedrooms:<span>{props.bedroom}</span></p>  
            <p>Bathrooms: <span>{props.bathroom}</span></p>  
            <p>Area: <span>{props.area}</span></p>  
            <p>Floor: <span>{props.floor}</span></p> 
            <p> Praking: <span>{props.parking}</span></p> 
            
        </div>
        
     </div>
    <center><button >schadual a visit </button></center> 
    </div>
  )
}

export default PropertyCard