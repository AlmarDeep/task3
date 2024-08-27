import React from 'react'
import styles from './FeaturedCard.module.css'

const FeaturedCard = (props) => {
  return (
    <div className={styles.mycard}>
      <img src={props.cimg} alt="" />
      <div className={styles.text} > 
        <h2>{props.ctitle}</h2>
       <p>{props.ctext}</p>
       </div>
      
    </div>
  )
}

export default FeaturedCard