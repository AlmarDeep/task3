import React from 'react'
import BestDealDown from '../BestDealDown/BestDealDown'
import './BestDeal.css'
import { useState } from 'react'

const BestDeal = () => {
  const [content, setContent] = useState({
    img: '/assets/img/deal-01.jpg',
    title: 'EXTRA INFO ABOUT PRPERTY',
    t1:'185m2',
    t2:'26th',
    t3:'4',
    t4:'yes',
    t5:'bank'
  });

  const changeContent = (newImage, newText,newt1,newt2,newt3,newt4,newt5) => {
    setContent({ img: newImage, 
      title: newText ,
      t1:newt1,
      t2:newt2,
      t3:newt3,
      t4:newt4,
      t5:newt5
    });
  };

  return (
    <>
    <div className='top'>
      <div className='texts'>
      <h1> | Best Deal</h1>
      <h2>find your best deal right now!</h2>
      </div>
        
      <div className='buttons'>
           <button   onClick={() => changeContent('/assets/img/deal-01.jpg', 'EXTRA INFO ABOUT PRPERTY','180m2','26th','4','yes','bank')}>Appartment</button>
           <button  onClick={() => changeContent('/assets/img/deal-02.jpg', 'DETAIL INFO ABOUT VILLA','250m2','26th','5','yes','bank') }> villa house</button>
           <button  onClick={() => changeContent('/assets/img/deal-03.jpg', 'EXTRA INFO ABOUT PRPERTY','320m2','34th','6','yes','bank')}> penthouse</button>
          </div>
    </div>
     
        
         
          <BestDealDown title={content.title} img={content.img} t1={content.t1} t2={content.t2} t3={content.t3} t4={content.t4} t5={content.t5} />
       
      <br />
        
   
        
    </>
    
    
  )
}

export default BestDeal