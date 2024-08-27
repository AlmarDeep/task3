import React from 'react'
import  './Hero.css'

const Hero = (props) => {
  
  return (
   
   <>
   <div className='container'>
        <div className='slider-w'>
            <div className="slider">
              
                <img id='slide1' src={props.img1} alt=""  />
                <div class='text-on-image'>
             <h1> HURRY! </h1>
             <p> GET THE BEST VILLA FOR YOU </p>
          </div>
               <img id='slide2' src={props.img2} alt="" />
               <img id='slide3' src={props.img3} alt="" />
            </div>
            <div className="slider-nav">
                <a href="#slide1"></a>
                <a href="#slide2"></a>
                <a href="#slide3"></a>
            </div>
                
        </div>
    </div>
   </>    
  )
}

export default Hero