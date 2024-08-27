import React from 'react'
import styles from './VideoCards.module.css'
import VideoCard from '../VideoCard/VideoCard'

const VideoCards = () => {
  return (
    <div className={styles.VideoCards}>
     <VideoCard  vctitle='34' vcp='building finsh now' />
     <VideoCard  vctitle='34' vcp='building finsh now' />
     <VideoCard  vctitle='34' vcp='building finsh now' />

    </div>
  )
}

export default VideoCards