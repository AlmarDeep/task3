import React from 'react'
import styles from './BestDealCard.module.css'

const BestDealCard = (props) => {
  return (
    // <div className={styles.bestcard}>
    //     <div className={styles.besttext} > 
    //     <p>{props.stitle}</p>
    //     <h2>{props.ftitle}</h2>
       
    //    </div>
    // </div>

    <>
    <div className={styles.bestcard}>
      <div className={styles.besttext}>
      <p>total falt space <span>{props.t1}</span> </p>
      <p>floor number <span>{props.t2}</span> </p>
      <p>number of rooms <span>{props.t3}</span> </p>
      <p>parking available <span>{props.t4}</span> </p>
      <p>payment process<span>{props.t5}</span> </p>
      </div>
      
    </div>
    </>
  )
}

export default BestDealCard