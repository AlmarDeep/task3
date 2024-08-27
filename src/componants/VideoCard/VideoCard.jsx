import React from 'react'
import styles from'./VideoCard.module.css'

const VideoCard = (props) => {
  return (
    <>
    <div className={styles.vccontainer} >
        <div className={styles.vtitle}>
        <h1>{props.vctitle}</h1>
        <p>{props.vcp}</p>
        </div>
        <div className={styles.circle}>
        </div>
     
     
    </div>
    </>
  )
}

export default VideoCard