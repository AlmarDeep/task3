import React from 'react'
import styles from './VideoSection.module.css'

import ImageandText from '../ImageandText/ImageandText'



const VideoSection = () => {
  return (
    <>
       <div className={styles.allvideo}>
     <div className={styles.videosection}>  
    
     <ImageandText iimg='/assets/img/poolvilla.jpg' ititle='| VIDEO VEIW' idescription='get closer view and different feeling'/>
     <div className={styles.myvideo}>
       <video src="" controls poster='/assets/img/video-frame.jpg' width="1000" height="300" className={styles.thevideo}></video>
     </div> 
     </div> 
     </div>
        
    </>
 
   
  )
}

export default VideoSection