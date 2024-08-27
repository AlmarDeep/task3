import React from 'react'
import Hero from '../componants/Hero/Hero'
import Featured from '../componants/Featured/Featured'
import VideoSection from '../componants/VideoSection/VideoSection'
import VideoCards from '../componants/VideoCards/VideoCards'

const Home = () => {
  return (
    <>
    <Hero img1='/assets/img/banner-01.jpg'img2='/assets/img/banner-02.jpg' img3='/assets/img/banner-03.jpg'  />
      <Featured />
       <VideoSection />
       <VideoCards />
    </>
  )
}

export default Home