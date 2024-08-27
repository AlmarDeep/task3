import React from 'react'
import styles from './ImageandText.module.css'

const ImageandText = ({iimg,ititle,idescription}) => {
  return (
    <div className={styles.imgandtext}>
       <center><img src={iimg} alt="" /></center>
       <div class={styles.textimg}>
            <p> {ititle}</p>
            <h1> {idescription} </h1>
         </div>
   </div>
  )
}

export default ImageandText