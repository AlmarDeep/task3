import React from 'react'
import styles from './SchedualButton.module.css'

const SchedualButton= () => {
  return (
    <div className={styles.mybutton}>
        <div className={styles.parenti}>
            <button> Schedual a visit</button>
        </div>
        <img src="/assets/img/schedule (2).png" alt="" className={styles.childi} />
    </div>
  )
}

export default SchedualButton